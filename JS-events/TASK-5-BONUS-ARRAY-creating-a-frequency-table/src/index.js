async function runScript() {
    const dataFromRequest = await fetch('https://kodaktor.ru/j/ips').then(data => data.json());

    let resultArray = []

    dataFromRequest.forEach((item) => {
        const foundIndex =  resultArray.findIndex(value => value.ip === item.ip)
        if (foundIndex !== -1) {
            resultArray[foundIndex].count += 1;
        } else {
            resultArray.push({ip: item.ip, count: 1 })
        }
    })
   
    resultArray = resultArray.sort((a, b) => b.count - a.count)

    const visitOnce = resultArray.filter(item => item.count === 1).length

    const frag = document.createDocumentFragment();

    const addInfo = document.createElement('div');
    addInfo.innerHTML = `<div>Всего в массиве ${resultArray.length} ip адресов</div>
                        <div>По одному разу сайт посещали с ${visitOnce} адресов</div>
                        <div>Максимальная часота посещенией ${resultArray[0].count}</div>`;
    frag.appendChild(addInfo);                    
    const table = document.createElement('div');
    table.classList.add('table__wrapper');

    const createTableRow = (table, firstColumnValue, secondColumnValue) => {
        const firstColumnTextNode = document.createTextNode(firstColumnValue);
        const secondColumnTextNode = document.createTextNode(secondColumnValue);
        const firstColumn = document.createElement('div');
        firstColumn.appendChild(firstColumnTextNode);
        firstColumn.classList.add('table__cell', 'table__first-column');
        const secondColumn = document.createElement('div');
        secondColumn.appendChild(secondColumnTextNode);
        secondColumn.classList.add('table__cell', 'table__second-column')
        table.appendChild(firstColumn);
        table.appendChild(secondColumn);
    } 

    createTableRow(table, 'ip', 'count');

    const tableRow = resultArray.map(value => {
        createTableRow(table, value.ip, value.count);
    })
    frag.appendChild(table);
    document.body.appendChild(frag);
}

runScript()