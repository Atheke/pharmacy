const scriptsToLoad = [
    'scripts/script.js',
    'scripts/allergies.js',
    'scripts/appointment.js',
		'scripts/currentMedication.js',
		'scripts/emergency.js', 
		'scripts/healthInfo.js',
		'scripts/patientHistory.js',
		'scripts/symptoms.js'
    // Add more script file paths as needed
];

function loadScripts() {
    scriptsToLoad.forEach(scriptPath => {
        const script = document.createElement('script');
        script.src = scriptPath;
        script.defer = true; 
        document.head.appendChild(script);
    });
}

loadScripts();

