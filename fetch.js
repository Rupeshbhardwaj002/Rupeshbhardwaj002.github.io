fetch('https://raw.githubusercontent.com/Rupeshbhardwaj002/Hybrid-RAG-Qwen-FAISS-XGBoost/main/README.md')
  .then(res => res.text())
  .then(text => console.log(text));
