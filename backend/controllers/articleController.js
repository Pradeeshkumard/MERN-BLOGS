const Article = require("../models/Article");

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
exports.create = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const slug = slugify(title);
    const article = new Article({ title, slug, content, tags });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.status(200).json(articles);
};

exports.get = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (!article) return res.status(404).json({ error: "Not found" });
  res.status(200).json(article);
};

exports.update = async (req, res) => {
  const updated = await Article.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    { new: true }
  );
  res.status(200).json(updated);
};

exports.remove = async (req, res) => {
  await Article.findOneAndDelete({ slug: req.params.slug });
  res.status(200).json({ message: "Deleted" });
};
