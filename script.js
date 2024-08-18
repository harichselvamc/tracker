let totalEarned = 0;
let targetAmount = 0;
let dailyTarget = 0;
let monthlyTarget = 0;

function updateTracker() {
    const earnings = parseFloat(document.getElementById('dailyEarnings').value);
    targetAmount = parseFloat(document.getElementById('targetAmount').value);
    dailyTarget = parseFloat(document.getElementById('dailyTarget').value);
    monthlyTarget = parseFloat(document.getElementById('monthlyTarget').value);

    if (!isNaN(earnings)) {
        totalEarned += earnings;
    }

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
