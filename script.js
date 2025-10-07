// Material database
const materialsDB = [
    {id: 'CAMX_001', name: 'CA pristine', filler: 'None', loading: 0, voc: 90, isc: 5, power: 0.35, ref: 'CAMX 2025'},
    {id: 'CAMX_002', name: 'CAMX_a 70μm', filler: 'MXene', loading: 5, voc: 200, isc: 12, power: 1.20, ref: 'CAMX 2025'},
    {id: 'CAMX_003', name: 'CAMX_b 90μm', filler: 'MXene', loading: 5, voc: 220, isc: 13, power: 1.40, ref: 'CAMX 2025'},
    {id: 'CAMX_004', name: 'CAMX optimized', filler: 'MXene', loading: 8, voc: 240, isc: 14, power: 1.60, ref: 'CAMX 2025'},
    {id: 'XU_001', name: 'PTFE pristine', filler: 'None', loading: 0, voc: 325, isc: 8, power: 0.65, ref: 'Xu 2025'},
    {id: 'XU_002', name: 'PTFE-Ag 7%', filler: 'Ag', loading: 7, voc: 400, isc: 18, power: 2.00, ref: 'Xu 2025'},
    {id: 'XU_003', name: 'PTFE-Al 5%', filler: 'Al', loading: 5, voc: 350, isc: 12, power: 1.08, ref: 'Xu 2025'},
    {id: 'XU_004', name: 'PTFE-F 3%', filler: 'F', loading: 3, voc: 380, isc: 14, power: 1.21, ref: 'Xu 2025'},
    {id: 'XU_005', name: 'PI pristine', filler: 'None', loading: 0, voc: 280, isc: 7, power: 0.52, ref: 'Xu 2025'},
    {id: 'XU_006', name: 'PVDF pristine', filler: 'None', loading: 0, voc: 260, isc: 9, power: 0.58, ref: 'Xu 2025'},
    {id: 'XU_007', name: 'PC pristine', filler: 'None', loading: 0, voc: 240, isc: 6, power: 0.36, ref: 'Xu 2025'},
    {id: 'XU_008', name: 'PP pristine', filler: 'None', loading: 0, voc: 220, isc: 5, power: 0.28, ref: 'Xu 2025'},
    {id: 'XU_009', name: 'PVC pristine', filler: 'None', loading: 0, voc: 210, isc: 6, power: 0.32, ref: 'Xu 2025'},
    {id: 'XU_010', name: 'PDMS pristine', filler: 'None', loading: 0, voc: 180, isc: 4, power: 0.18, ref: 'Xu 2025'}
];

// Tab switching
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Highlight active button
    event.target.classList.add('active');
    
    // Populate database table if database tab
    if (tabName === 'database') {
        populateDatabase();
    }
}

// Update slider values
function updateValue(id) {
    const slider = document.getElementById(id);
    const display = document.getElementById(id + '-val');
    display.textContent = slider.value;
}

// Load CAMX preset
function loadCAMXPreset() {
    document.getElementById('polymer').value = 'CA';
    document.getElementById('filler').value = 'MXene';
    document.getElementById('loading').value = 5;
    document.getElementById('thickness').value = 70;
    document.getElementById('dielectric').value = 18;
    document.getElementById('roughness').value = 35;
    document.getElementById('freq').value = 3;
    document.getElementById('force').value = 30;
    
    // Update displays
    updateValue('loading');
    updateValue('thickness');
    updateValue('dielectric');
    updateValue('roughness');
    updateValue('freq');
    updateValue('force');
    
    alert('✅ CAMX_a preset loaded! Click "Predict Performance" to see results.');
}

// Reset inputs
function resetInputs() {
    document.getElementById('polymer').value = 'CA';
    document.getElementById('filler').value = 'None';
    document.getElementById('loading').value = 5;
    document.getElementById('thickness').value = 100;
    document.getElementById('dielectric').value = 10;
    document.getElementById('roughness').value = 30;
    document.getElementById('freq').value = 3;
    document.getElementById('force').value = 30;
    
    // Update displays
    updateValue('loading');
    updateValue('thickness');
    updateValue('dielectric');
    updateValue('roughness');
    updateValue('freq');
    updateValue('force');
    
    // Clear predictions
    document.getElementById('pred-voc').textContent = '---';
    document.getElementById('pred-isc').textContent = '---';
    document.getElementById('pred-power').textContent = '---';
    document.getElementById('pred-energy').textContent = '---';
}

// Simplified prediction model (empirical formulas based on database)
function predict() {
    // Get inputs
    const polymer = document.getElementById('polymer').value;
    const filler = document.getElementById('filler').value;
    const loading = parseFloat(document.getElementById('loading').value);
    const thickness = parseFloat(document.getElementById('thickness').value);
    const dielectric = parseFloat(document.getElementById('dielectric').value);
    const roughness = parseFloat(document.getElementById('roughness').value);
    const freq = parseFloat(document.getElementById('freq').value);
    const force = parseFloat(document.getElementById('force').value);
    
    // Base values by polymer
    const baseValues = {
        'CA': {voc: 90, isc: 5, power: 0.35},
        'PTFE': {voc: 325, isc: 8, power: 0.65},
        'PVDF': {voc: 260, isc: 9, power: 0.58},
        'PI': {voc: 280, isc: 7, power: 0.52},
        'PDMS': {voc: 180, isc: 4, power: 0.18}
    };
    
    let base = baseValues[polymer] || baseValues['CA'];
    
    // Filler effects
    let fillerMultiplier = 1.0;
    if (filler === 'MXene') {
        fillerMultiplier = 1.0 + (loading / 100) * 3.0; // Up to 3x at 10%
    } else if (filler === 'Ag') {
        fillerMultiplier = 1.0 + (loading / 100) * 4.0; // Up to 4x at 10%
    } else if (filler === 'CNT' || filler === 'Graphene') {
        fillerMultiplier = 1.0 + (loading / 100) * 2.5;
    }
    
    // Dielectric effect (higher = better)
    const dielectricFactor = Math.sqrt(dielectric / 10);
    
    // Roughness effect (higher = better, up to a point)
    const roughnessFactor = 1.0 + (roughness - 30) / 100;
    
    // Thickness effect (optimal around 70-90 μm)
    const thicknessFactor = 1.0 - Math.abs(thickness - 80) / 200;
    
    // Device parameters
    const freqFactor = Math.sqrt(freq / 3);
    const forceFactor = Math.sqrt(force / 30);
    
    // Calculate predictions
    let voc = base.voc * fillerMultiplier * dielectricFactor * roughnessFactor * thicknessFactor;
    let isc = base.isc * fillerMultiplier * dielectricFactor * roughnessFactor * freqFactor * forceFactor;
    let power = base.power * fillerMultiplier * fillerMultiplier * dielectricFactor * roughnessFactor * thicknessFactor * freqFactor * forceFactor;
    let energy = power * 0.05; // Rough estimate
    
    // Add some randomness to simulate model uncertainty
    voc *= (0.9 + Math.random() * 0.2);
    isc *= (0.9 + Math.random() * 0.2);
    power *= (0.9 + Math.random() * 0.2);
    energy *= (0.9 + Math.random() * 0.2);
    
    // Display results with animation
    animateValue('pred-voc', voc.toFixed(0));
    animateValue('pred-isc', isc.toFixed(1));
    animateValue('pred-power', power.toFixed(2));
    animateValue('pred-energy', energy.toFixed(3));
}

// Animate number counting
function animateValue(id, finalValue) {
    const element = document.getElementById(id);
    const duration = 1000; // 1 second
    const steps = 30;
    const increment = finalValue / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        current += increment;
        step++;
        element.textContent = current.toFixed(id === 'pred-voc' ? 0 : (id === 'pred-isc' ? 1 : (id === 'pred-power' ? 2 : 3)));
        
        if (step >= steps) {
            clearInterval(timer);
            element.textContent = finalValue;
        }
    }, duration / steps);
}

// Populate database table
function populateDatabase() {
    const tbody = document.getElementById('materials-tbody');
    tbody.innerHTML = '';
    
    materialsDB.forEach(mat => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${mat.id}</td>
            <td>${mat.name}</td>
            <td>${mat.filler}</td>
            <td>${mat.loading}</td>
            <td>${mat.voc}</td>
            <td>${mat.isc}</td>
            <td>${mat.power.toFixed(2)}</td>
            <td>${mat.ref}</td>
        `;
        
        // Add click handler to load material
        row.onclick = () => {
            alert(`Material: ${mat.name}\nVoc: ${mat.voc} V\nIsc: ${mat.isc} μA\nPower: ${mat.power} W/m²\n\nClick "Load CAMX Data" button to load similar parameters into the predictor.`);
        };
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial slider values
    updateValue('loading');
    updateValue('thickness');
    updateValue('dielectric');
    updateValue('roughness');
    updateValue('freq');
    updateValue('force');
    
    // Populate database
    populateDatabase();
});
