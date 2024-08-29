function eventHandle(container) {
    const faqContainer = document.querySelector(container);

    faqContainer.addEventListener('click', function(event) {
        const question = event.target.closest('.faq-question');
        const answer = question ? question.nextElementSibling : null;

        if (question && answer) {
            // Toggle the clicked state
            question.classList.toggle('clicked');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

            // Hide all other answers
            faqContainer.querySelectorAll('.faq-answer').forEach((it) => {
                if (it !== answer) {
                    it.style.display = 'none';
                    it.previousElementSibling.classList.remove('clicked');
                }
            });

            // Hide the answer if neither the button nor the answer is "clicked"
            setTimeout(() => {
                if (!question.classList.contains('clicked') && !answer.classList.contains('clicked')) {
                    answer.style.display = 'none';
                    question.classList.remove('clicked');
                }
            }, 1000);
        }
    });
}

eventHandle('.faq-container');
