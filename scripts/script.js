function calculateDays() {
    const input = document.getElementById('birthday');
    const selectedDate = new Date(input.value);
    const today = new Date();

    if (today.getMonth() > selectedDate.getMonth() || (today.getMonth() == selectedDate.getMonth() && today.getDate() > selectedDate.getDate())) {
        selectedDate.setFullYear(today.getFullYear() + 1);
    } else {
        selectedDate.setFullYear(today.getFullYear());
    }

    const diffTime = Math.abs(selectedDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const result = document.getElementById('result');
    if (input.value === '') {
        result.textContent = 'Пожалуйста, введите дату рождения';
        result.style.display = 'block';
    } else {
        result.style.display = 'none';
        if (diffDays % 10 == 1 && diffDays % 100 != 11) {
            result.textContent = `До дня рождения остался ${diffDays} день`;
        } else if (diffDays % 10 >= 2 && diffDays % 10 <= 4 && (diffDays % 100 < 10 || diffDays % 100 >= 20)) {
            result.textContent = `До дня рождения осталось ${diffDays} дня`;
        } else {
            result.textContent = `До дня рождения осталось ${diffDays} дней`;
        }
        result.style.display = 'block';
    }
}