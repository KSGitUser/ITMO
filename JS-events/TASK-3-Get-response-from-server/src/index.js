(async () => {
    const requestData = async () => {
        try {
            const data = await fetch('https://kodaktor.ru/j/users').then(data => data.json());
            return data
        } catch (error) {
            console.error(error);
            throw new Error(error)
        }
    };
    
    const { users } = await requestData();
    const app = document.getElementById('app');
    
    users.forEach(user => {
        const newLine = document.createElement('DIV')
        newLine.textContent = user.login 
        app.appendChild(newLine)
    });
    
})()
