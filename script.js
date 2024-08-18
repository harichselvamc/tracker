let totalEarned = 0;
let targetAmount = 0;
let dailyTarget = 0;
let monthlyTarget = 0;
let earningsArray = [];

function addEarnings() {
    const earnings = parseFloat(document.getElementById('dailyEarnings').value);
    targetAmount = parseFloat(document.getElementById('targetAmount').value);
    dailyTarget = parseFloat(document.getElementById('dailyTarget').value);
    monthlyTarget = parseFloat(document.getElementById('monthlyTarget').value);
    
    if (!isNaN(earnings)) {
        earningsArray.push(earnings);
        totalEarned += earnings;
    }
    
    updateTracker();
    updateEarningsList();
}

function updateTracker() {
    const remainingTarget = targetAmount - totalEarned;
    const remainingDays = remainingTarget / dailyTarget;

    const remainingMonthlyTarget = monthlyTarget - totalEarned;
    const remainingMonthlyDays = remainingMonthlyTarget / dailyTarget;

    document.getElementById('totalEarned').innerText = `Total Earned: ₹${totalEarned.toFixed(2)}`;
    document.getElementById('remainingTarget').innerText = `Remaining Target: ₹${remainingTarget.toFixed(2)}`;
    document.getElementById('remainingDays').innerText = `Remaining Days: ${remainingDays.toFixed(0)} days`;
    document.getElementById('remainingMonthlyTarget').innerText = `Remaining Monthly Target: ₹${remainingMonthlyTarget.toFixed(2)}`;
    document.getElementById('remainingMonthlyDays').innerText = `Remaining Monthly Days: ${remainingMonthlyDays.toFixed(0)} days`;
}

function updateEarningsList() {
    const earningsList = document.getElementById('earningsList');
    earningsList.innerHTML = '';
    
    earningsArray.forEach((earning, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ₹${earning.toFixed(2)}
            <span>
                <button class="edit" onclick="editEarning(${index})">Edit</button>
                <button onclick="removeEarning(${index})">Remove</button>
            </span>
        `;
        earningsList.appendChild(listItem);
    });
}

function editEarning(index) {
    const newEarning = prompt('Edit earnings:', earningsArray[index]);
    if (newEarning !== null && !isNaN(parseFloat(newEarning))) {
        totalEarned -= earningsArray[index];
        earningsArray[index] = parseFloat(newEarning);
        totalEarned += earningsArray[index];
        updateTracker();
        updateEarningsList();
    }
}

function removeEarning(index) {
    totalEarned -= earningsArray[index];
    earningsArray.splice(index, 1);
    updateTracker();
    updateEarningsList();
}
