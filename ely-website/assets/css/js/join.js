document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");

  fetch("assets/data/questions.json")
    .then(res => res.json())
    .then(questions => {
      const selected = shuffle(questions).slice(0, 10);
      selected.forEach((q, i) => {
        const block = document.createElement("div");
        block.className = "question-block";

        const qText = document.createElement("p");
        qText.textContent = `Q${i + 1}. ${q.question}`;
        block.appendChild(qText);

        q.options.forEach(opt => {
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `q${i}`;
          input.value = opt;
          input.required = true;

          label.appendChild(input);
          label.append(" " + opt);
          block.appendChild(label);
        });

        container.appendChild(block);
      });
    });

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  document.getElementById("exam-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("提交成功！請等待管理員審核。");
    // 可接API提交表單
  });
});