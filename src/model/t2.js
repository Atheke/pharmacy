const fs = require('fs');
const data = {
    "Common Cold": {
        "Runny or stuffy nose": {"severity": 5, "weight": 0.3},
        "Sneezing": {"severity": 4, "weight": 0.2},
        "Sore throat": {"severity": 4, "weight": 0.3},
        "Cough": {"severity": 4, "weight": 0.2},
        "Mild body aches": {"severity": 3, "weight": 0.2},
        "Low-grade fever": {"severity": 3, "weight": 0.2},
        "overall_severity": 4.1
    },
    "Influenza (Flu)": {
        "Fever": {"severity": 8, "weight": 0.4},
        "Chills": {"severity": 7, "weight": 0.3},
        "Muscle or body aches": {"severity": 7, "weight": 0.3},
        "Cough": {"severity": 7, "weight": 0.3},
        "Sore throat": {"severity": 6, "weight": 0.3},
        "Runny or stuffy nose": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 6, "weight": 0.3},
        "overall_severity": 7
    },
    "Gastroenteritis (Stomach Flu)": {
        "Nausea": {"severity": 6, "weight": 0.3},
        "Vomiting": {"severity": 7, "weight": 0.4},
        "Diarrhea": {"severity": 8, "weight": 0.4},
        "Abdominal pain or cramps": {"severity": 7, "weight": 0.3},
        "Fever": {"severity": 5, "weight": 0.2},
        "Headache": {"severity": 5, "weight": 0.2},
        "overall_severity": 6.7
    },
    "Pneumonia": {
        "Cough with phlegm or pus": {"severity": 8, "weight": 0.4},
        "Fever": {"severity": 9, "weight": 0.5},
        "Chills": {"severity": 8, "weight": 0.4},
        "Difficulty breathing": {"severity": 9, "weight": 0.5},
        "Chest pain": {"severity": 7, "weight": 0.3},
        "Fatigue": {"severity": 7, "weight": 0.3},
        "overall_severity": 8.2
    },
    "Urinary Tract Infection (UTI)": {
        "Burning sensation during urination": {"severity": 6, "weight": 0.4},
        "Frequent urination": {"severity": 5, "weight": 0.3},
        "Cloudy or strong-smelling urine": {"severity": 5, "weight": 0.3},
        "Pelvic pain": {"severity": 6, "weight": 0.4},
        "Fever": {"severity": 5, "weight": 0.3},
        "overall_severity": 5.5
    },
    "Strep Throat": {
        "Sudden and severe sore throat": {"severity": 7, "weight": 0.4},
        "Pain when swallowing": {"severity": 6, "weight": 0.3},
        "Fever": {"severity": 7, "weight": 0.4},
        "Swollen tonsils": {"severity": 6, "weight": 0.3},
        "White patches or pus on the tonsils": {"severity": 7, "weight": 0.4},
        "overall_severity": 6.7
    },
    "Conjunctivitis (Pink Eye)": {
        "Redness in the white of the eye or inner eyelid": {"severity": 5, "weight": 0.4},
        "Increased tearing": {"severity": 4, "weight": 0.3},
        "Itching or burning sensation": {"severity": 5, "weight": 0.4},
        "Discharge that may form a crust during sleep": {"severity": 4, "weight": 0.3},
        "overall_severity": 4.6
    },
    "Sinusitis": {
        "Nasal congestion": {"severity": 6, "weight": 0.4},
        "Facial pain or pressure": {"severity": 6, "weight": 0.4},
        "Headache": {"severity": 5, "weight": 0.3},
        "Thick yellow or green mucus from the nose": {"severity": 6, "weight": 0.4},
        "Reduced sense of smell and taste": {"severity": 5, "weight": 0.3},
        "overall_severity": 5.7
    },
    "Bronchitis": {
        "Persistent cough with mucus": {"severity": 7, "weight": 0.4},
        "Chest discomfort": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 5, "weight": 0.3},
        "Shortness of breath": {"severity": 7, "weight": 0.4},
        "Mild fever and chills": {"severity": 5, "weight": 0.3},
        "overall_severity": 6.3
    },
    "Allergic Rhinitis (Hay Fever)": {
        "Sneezing": {"severity": 5, "weight": 0.3},
        "Runny or stuffy nose": {"severity": 6, "weight": 0.4},
        "Itchy or watery eyes": {"severity": 5, "weight": 0.3},
        "Itching of the throat or roof of the mouth": {"severity": 4, "weight": 0.2},
        "Cough": {"severity": 4, "weight": 0.2},
        "overall_severity": 5
    },
    "Asthma": {
        "Shortness of breath": {"severity": 7, "weight": 0.4},
        "Chest tightness or pain": {"severity": 6, "weight": 0.3},
        "Wheezing": {"severity": 7, "weight": 0.4},
        "Coughing, especially at night or early morning": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.7
    },
    "Migraine": {
        "Severe headache (usually one-sided)": {"severity": 8, "weight": 0.4},
        "Throbbing or pulsating pain": {"severity": 8, "weight": 0.4},
        "Nausea or vomiting": {"severity": 7, "weight": 0.3},
        "Sensitivity to light and sound": {"severity": 6, "weight": 0.3},
        "overall_severity": 7.4
    },
    "Diabetes (Type 2)": {
        "Increased thirst": {"severity": 6, "weight": 0.3},
        "Frequent urination": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 5, "weight": 0.2},
        "Blurred vision": {"severity": 5, "weight": 0.2},
        "Slow-healing sores or frequent infections": {"severity": 6, "weight": 0.3},
        "overall_severity": 5.6
    },
    "Hypertension (High Blood Pressure)": {
        "Headache": {"severity": 6, "weight": 0.3},
        "Dizziness": {"severity": 6, "weight": 0.3},
        "Blurred vision": {"severity": 5, "weight": 0.2},
        "Chest pain": {"severity": 7, "weight": 0.4},
        "Shortness of breath": {"severity": 7, "weight": 0.4},
        "overall_severity": 6.5
    },
    "Osteoarthritis": {
        "Joint pain": {"severity": 6, "weight": 0.4},
        "Stiffness": {"severity": 6, "weight": 0.4},
        "Swelling": {"severity": 5, "weight": 0.3},
        "Decreased range of motion": {"severity": 5, "weight": 0.3},
        "overall_severity": 5.7
    },
    "Rheumatoid Arthritis": {
        "Joint pain": {"severity": 7, "weight": 0.4},
        "Swelling": {"severity": 7, "weight": 0.4},
        "Stiffness, especially in the morning or after inactivity": {"severity": 8, "weight": 0.5},
        "Fatigue": {"severity": 6, "weight": 0.3},
        "Low-grade fever": {"severity": 5, "weight": 0.2},
        "overall_severity": 6.8
    },
    "Gastric Ulcer": {
        "Abdominal pain, usually between meals or during the night": {"severity": 7, "weight": 0.4},
        "Nausea": {"severity": 6, "weight": 0.3},
        "Vomiting": {"severity": 7, "weight": 0.4},
        "Bloating": {"severity": 6, "weight": 0.3},
        "Loss of appetite": {"severity": 5, "weight": 0.2},
        "Weight loss": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.3
    },
    "Chronic Obstructive Pulmonary Disease (COPD)": {
        "Shortness of breath": {"severity": 8, "weight": 0.4},
        "Chronic cough": {"severity": 7, "weight": 0.4},
        "Wheezing": {"severity": 7, "weight": 0.4},
        "Chest tightness": {"severity": 7, "weight": 0.4},
        "overall_severity": 7.5
    },
    "Eczema (Atopic Dermatitis)": {
        "Itchy skin": {"severity": 6, "weight": 0.4},
        "Red to brownish-gray patches": {"severity": 6, "weight": 0.4},
        "Small, raised bumps": {"severity": 5, "weight": 0.3},
        "Thickened, cracked, or scaly skin": {"severity": 5, "weight": 0.3},
        "overall_severity": 5.7
    },
    "Anxiety Disorder": {
        "Excessive worrying": {"severity": 7, "weight": 0.4},
        "Restlessness": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 5, "weight": 0.3},
        "Difficulty concentrating": {"severity": 6, "weight": 0.3},
        "Irritability": {"severity": 6, "weight": 0.3},
        "Muscle tension": {"severity": 5, "weight": 0.3},
        "Sleep disturbances": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.1
    },
    "Food Poisoning": {
        "Nausea": {"severity": 6, "weight": 0.3},
        "Vomiting": {"severity": 7, "weight": 0.4},
        "Diarrhea": {"severity": 8, "weight": 0.4},
        "Abdominal pain or cramps": {"severity": 7, "weight": 0.3},
        "Fever": {"severity": 5, "weight": 0.2},
        "Headache": {"severity": 5, "weight": 0.2},
        "overall_severity": 6.8
    },
    "Heat Exhaustion": {
        "Heavy sweating": {"severity": 6, "weight": 0.3},
        "Weakness": {"severity": 5, "weight": 0.2},
        "Dizziness": {"severity": 6, "weight": 0.3},
        "Nausea or vomiting": {"severity": 6, "weight": 0.3},
        "Fainting": {"severity": 7, "weight": 0.4},
        "Headache": {"severity": 6, "weight": 0.3},
        "overall_severity": 6
    },
    "Heat Stroke": {
        "High body temperature (above 103°F or 40°C)": {"severity": 9, "weight": 0.5},
        "Hot, red, dry skin": {"severity": 8, "weight": 0.4},
        "Rapid pulse": {"severity": 8, "weight": 0.4},
        "Headache": {"severity": 7, "weight": 0.4},
        "Dizziness": {"severity": 6, "weight": 0.3},
        "Confusion": {"severity": 7, "weight": 0.4},
        "Loss of consciousness": {"severity": 9, "weight": 0.5},
        "overall_severity": 8
    },
    "Sunburn": {
        "Redness": {"severity": 5, "weight": 0.3},
        "Pain": {"severity": 6, "weight": 0.3},
        "Swelling": {"severity": 5, "weight": 0.3},
        "Blisters": {"severity": 6, "weight": 0.3},
        "Headache": {"severity": 5, "weight": 0.3},
        "Fever": {"severity": 5, "weight": 0.3},
        "Nausea": {"severity": 5, "weight": 0.3},
        "overall_severity": 5.3
    },
    "Meningitis": {
        "Sudden high Fever": {"severity": 8, "weight": 0.4},
        "Stiff neck": {"severity": 7, "weight": 0.4},
        "Severe headache": {"severity": 8, "weight": 0.4},
        "Confusion or difficulty concentrating": {"severity": 7, "weight": 0.4},
        "Nausea or vomiting": {"severity": 7, "weight": 0.4},
        "Sensitivity to light": {"severity": 6, "weight": 0.3},
        "Seizures": {"severity": 8, "weight": 0.4},
        "overall_severity": 7.3
    },
    "Chickenpox": {
        "Rash (red spots that progress to blisters)": {"severity": 8, "weight": 0.4},
        "Itching": {"severity": 7, "weight": 0.4},
        "Fever": {"severity": 7, "weight": 0.4},
        "Fatigue": {"severity": 6, "weight": 0.3},
        "Loss of appetite": {"severity": 5, "weight": 0.2},
        "Headache": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.9
    },
    "Hepatitis": {
        "Fatigue": {"severity": 6, "weight": 0.3},
        "Nausea or vomiting": {"severity": 7, "weight": 0.4},
        "Abdominal pain or discomfort": {"severity": 7, "weight": 0.4},
        "Loss of appetite": {"severity": 6, "weight": 0.3},
        "Jaundice (yellowing of the skin and eyes)": {"severity": 8, "weight": 0.4},
        "Dark urine": {"severity": 7, "weight": 0.4},
        "Pale-colored stool": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.7
    },
    "Lyme Disease": {
        "Bullseye-shaped rash": {"severity": 7, "weight": 0.4},
        "Fever": {"severity": 7, "weight": 0.4},
        "Chills": {"severity": 7, "weight": 0.4},
        "Headache": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 6, "weight": 0.3},
        "Muscle and joint aches": {"severity": 7, "weight": 0.4},
        "overall_severity": 6.8
    },
    "Concussion": {
        "Headache": {"severity": 7, "weight": 0.4},
        "Confusion": {"severity": 7, "weight": 0.4},
        "Dizziness": {"severity": 7, "weight": 0.4},
        "Nausea or vomiting": {"severity": 6, "weight": 0.3},
        "Fatigue": {"severity": 6, "weight": 0.3},
        "Memory problems": {"severity": 6, "weight": 0.3},
        "Sensitivity to light or noise": {"severity": 6, "weight": 0.3},
        "overall_severity": 6.5
    },
    "Iron Deficiency Anemia": {
        "Fatigue": {"severity": 7, "weight": 0.4},
        "Weakness": {"severity": 7, "weight": 0.4},
        "Pale skin": {"severity": 6, "weight": 0.3},
        "Shortness of breath": {"severity": 7, "weight": 0.4},
        "Dizziness or lightheadedness": {"severity": 6, "weight": 0.3},
        "Cold hands and feet": {"severity": 5, "weight": 0.2},
        "overall_severity": 6.4
    },
    "Gout": {
        "Sudden and severe pain, usually in the big toe": {"severity": 8, "weight": 0.4},
        "Swelling": {"severity": 7, "weight": 0.4},
        "Redness": {"severity": 7, "weight": 0.4},
        "Warmth": {"severity": 6, "weight": 0.3},
        "Limited range of motion": {"severity": 5, "weight": 0.2},
        "overall_severity": 7.2
    },
    "Gallstones": {
        "Sudden and intensifying pain in the upper right abdomen": {"severity": 8, "weight": 0.4},
        "Back pain between the shoulder blades": {"severity": 7, "weight": 0.4},
        "Nausea": {"severity": 6, "weight": 0.3},
        "Vomiting": {"severity": 7, "weight": 0.4},
        "Fever": {"severity": 6, "weight": 0.3},
        "Yellowing of the skin and eyes (jaundice)": {"severity": 8, "weight": 0.4},
        "overall_severity": 7.1
    },
    "Glaucoma": {
        "Gradual loss of peripheral vision": {"severity": 8, "weight": 0.4},
        "Tunnel vision": {"severity": 7, "weight": 0.4},
        "Eye pain": {"severity": 6, "weight": 0.3},
        "Nausea or vomiting": {"severity": 5, "weight": 0.2},
        "Blurred vision": {"severity": 7, "weight": 0.4},
        "overall_severity": 7
    },
    "Panic Disorder": {
        "Sudden and repeated attacks of fear": {"severity": 8, "weight": 0.4},
        "Feeling of being out of control during a panic attack": {"severity": 7, "weight": 0.4},
        "Sweating": {"severity": 6, "weight": 0.3},
        "Trembling": {"severity": 7, "weight": 0.4},
        "Chest pain": {"severity": 7, "weight": 0.4},
        "Heart palpitations": {"severity": 6, "weight": 0.3},
        "overall_severity": 7
    }
}

const jsonString = JSON.stringify(data);

// Write JSON string to a text file
fs.writeFileSync('data2.txt', jsonString);