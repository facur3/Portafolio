document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
        const skillName = item.querySelector('span').innerText;
        alert(`You clicked on ${skillName}. More details coming soon!`);
    });
});