document.addEventListener('DOMContentLoaded', function () {
    loadMeasurements();
});

async function submitMeasurements() {
    console.log("aqui")
    try {
    const studentName = document.getElementById('studentName').value;
    const chest = document.getElementById('chest').value;
    const biceps = document.getElementById('biceps').value;
    const waist = document.getElementById('waist').value;
    const hips = document.getElementById('hips').value;
    const thigh = document.getElementById('thigh').value;
    const left = document.getElementById('left').value;
    const bicepse = document.getElementById('bicepse').value;
    const abdomen = document.getElementById('abdomen').value;
    const forearm = document.getElementById('forearm').value;
    const forearme = document.getElementById('forearme').value;
    const calf = document.getElementById('calf').value;
    const calfe = document.getElementById('calfe').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const measurements = {
        studentName,
        chest,
        biceps,
        waist,
        hips,
        thigh,
        left,
        bicepse,
        abdomen,
        forearm,
        forearme,
        calf,
        calfe,
        height,
        weight,
        date: new Date().toLocaleDateString()
    }

    await saveMeasurements(measurements);
    loadMeasurements();
    clearForm();
    } catch (error) {
        console.log(error);
    }
}

function saveMeasurements(measurements) {
    try {
        const measurementHistory = getMeasurementHistory();
    measurementHistory.push(measurements);
    localStorage.setItem('measurementHistory', JSON.stringify(measurementHistory));
    } catch (error) {
        console.log("Error saving", error);

    }
}

function getMeasurementHistory() {
    return JSON.parse(localStorage.getItem('measurementHistory')) || [];
}

function loadMeasurements() {
    const measurementHistory = getMeasurementHistory();
    const historyContainer = document.getElementById('measurementHistory');
    historyContainer.innerHTML = '';

    if (measurementHistory.length === 0) {
        historyContainer.innerHTML = '<p>Nenhuma medida registrada.</p>'
    } else {
        measurementHistory.forEach(measurements => {
            const measureEntry = document.createElement('div');
            measureEntry.innerHTML = `<strong>${measurements.studentName}</strong> em ${measurements.date}: 
            Peito: ${measurements.chest}cm, Braço direito: ${measurements.biceps}cm, Braço esquedo: ${measurements.bicepse}cm, 
            Antebraço direito: ${measurements.forearm}cm, Antebraço esquerdo: ${measurements.forearme}cm, Cintura: ${measurements.waist}cm,
            abdômen: ${measurements.abdomen}cm, Quadril: ${measurements.hips}cm, coxa direita ${measurements.thigh}cm,
            coxa esquerda ${measurements.left}cm panturrilha direita ${measurements.calf}cm, panturrilha esquerda ${measurements.calfes}cm, 
            altura ${measurements.height} cm, peso ${measurements.weight} Kg.`
            
            historyContainer.appendChild(measureEntry);
        });
    }
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('chest').value = '';
    document.getElementById('biceps').value = '';
    document.getElementById('waist').value = '';
    document.getElementById('hips').value = '';
    document.getElementById('thigh').value = '';
    document.getElementById('left').value = '';
    document.getElementById('bicepse').value = '';
    document.getElementById('abdomen').value = '';
    document.getElementById('forearm').value = '';
    document.getElementById('forearme').value = '';
    document.getElementById('calf').value = '';
    document.getElementById('calfe').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    
}    
