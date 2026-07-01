const thread = {
    text: "Отличная статья",
    replies: [
      {
        text: "Согласен",
        replies: [
          { text: "И я", replies: [] },
          { text: "А мне не зашло", replies: [
            { text: "Почему?", replies: [] },
          ]},
        ],
      },
      { text: "Спасибо автору", replies: [] },
    ],
};

function repliesQty(comment) {
  let qty = "text" in comment ? 1 : 0;;

  for (const reply of comment.replies) {
    qty += repliesQty(reply);
  }

  return qty;
}

function threadDepth(comment) {
    let maxDepth = 0;

    if (comment.replies && comment.replies.length > 0) {
        for (const reply of comment.replies) {
            const currentDepth = threadDepth(reply);
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        }
    }

    return 1 + maxDepth;
}

console.log("Всего комментариев: " + repliesQty(thread));
console.log("Максимальная глубина: " + threadDepth(thread));