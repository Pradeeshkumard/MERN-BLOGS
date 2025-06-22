import { useState } from "react";
import { api } from "../api/api";

const NewArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/articles", {
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
    });
    setTitle("");
    setContent("");
    setTags("");
    alert("Article posted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Article</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Markdown content"
        required
      />
      <input
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags (comma-separated)"
      />
      <button type="submit">Post</button>
    </form>
  );
};
export default NewArticleForm;
