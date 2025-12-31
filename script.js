const VOCABULARY = {
    translate: {
        animals: [
            { english: "Dog", spanish: "PERRO" },
            { english: "Cat", spanish: "GATO" },
            { english: "Fish", spanish: "PEZ" },
            { english: "Rabbit", spanish: "CONEJO" },
            { english: "Cow", spanish: "VACA" },
            { english: "Horse", spanish: "CABALLO" },
            { english: "Sheep", spanish: "OVEJA" },
            { english: "Pig", spanish: "CERDO" },
            { english: "Goat", spanish: "CABRA" },
            { english: "Bird", spanish: "PAJARO" },
            { english: "Elephant", spanish: "ELEFANTE" },
            { english: "Lion", spanish: "LEON", tts: "León" },
            { english: "Tiger", spanish: "TIGRE" },
            { english: "Monkey", spanish: "MONO" },
            { english: "Bear", spanish: "OSO" },
            { english: "Giraffe", spanish: "JIRAFA" },
            { english: "Snake", spanish: "SERPIENTE" },
            { english: "Wolf", spanish: "LOBO" },
            { english: "Eagle", spanish: "AGUILA", tts: "Águila" },
            { english: "Frog", spanish: "RANA" }
        ],
        food: [
            { english: "Water", spanish: "AGUA" },
            { english: "Coffee", spanish: "CAFE", tts: "Café" },
            { english: "Tea", spanish: "TE", tts: "Té" },
            { english: "Milk", spanish: "LECHE" },
            { english: "Bread", spanish: "PAN" },
            { english: "Cheese", spanish: "QUESO" },
            { english: "Egg", spanish: "HUEVO" },
            { english: "Apple", spanish: "MANZANA" },
            { english: "Meat", spanish: "CARNE" },
            { english: "Chicken", spanish: "POLLO" },
            { english: "Rice", spanish: "ARROZ" },
            { english: "Pasta", spanish: "PASTA" },
            { english: "Fish", spanish: "PESCADO" },
            { english: "Fruit", spanish: "FRUTA" },
            { english: "Vegetables", spanish: "VERDURAS" },
            { english: "Sugar", spanish: "AZUCAR", tts: "Azúcar" },
            { english: "Salt", spanish: "SAL" },
            { english: "Beer", spanish: "CERVEZA" },
            { english: "Wine", spanish: "VINO" },
            { english: "Butter", spanish: "MANTEQUILLA" }
        ],
        travel: [
            { english: "Plane", spanish: "AVION", tts: "Avión" },
            { english: "Passport", spanish: "PASAPORTE" },
            { english: "Hotel", spanish: "HOTEL" },
            { english: "Taxi", spanish: "TAXI" },
            { english: "Bus", spanish: "AUTOBUS", tts: "Autobús" },
            { english: "Airport", spanish: "AEROPUERTO" },
            { english: "Station", spanish: "ESTACION", tts: "Estación" },
            { english: "Train", spanish: "TREN" },
            { english: "Suitcase", spanish: "MALETA" },
            { english: "Map", spanish: "MAPA" },
            { english: "Ticket", spanish: "BILLETE" },
            { english: "Beach", spanish: "PLAYA" },
            { english: "City", spanish: "CIUDAD" },
            { english: "Country", spanish: "PAIS", tts: "País" },
            { english: "Arrival", spanish: "LLEGADA" },
            { english: "Departure", spanish: "SALIDA" },
            { english: "Reservation", spanish: "RESERVA" },
            { english: "Road", spanish: "CARRETERA" },
            { english: "Backpack", spanish: "MOCHILA" },
            { english: "Guide", spanish: "GUIA", tts: "Guía" }
        ],
        conversation: [
            { english: "Hello", spanish: "HOLA" },
            { english: "Goodbye", spanish: "ADIOS", tts: "Adiós" },
            { english: "Please", spanish: "PORFAVOR", tts: "Por favor" },
            { english: "Thank you", spanish: "GRACIAS" },
            { english: "Friend", spanish: "AMIGO" },
            { english: "Good morning", spanish: "BUENOSDIAS", tts: "Buenos días" },
            { english: "Good night", spanish: "BUENASNOCHES", tts: "Buenas noches" },
            { english: "Pardon", spanish: "PERDON", tts: "Perdón" },
            { english: "Welcome", spanish: "BIENVENIDO" },
            { english: "Yes", spanish: "SI", tts: "Sí" },
            { english: "No", spanish: "NO" },
            { english: "Maybe", spanish: "QUIZAS", tts: "Quizás" },
            { english: "Help", spanish: "AYUDA" },
            { english: "Sorry", spanish: "LO-SIENTO", tts: "Lo siento" },
            { english: "How are you", spanish: "COMO-ESTAS", tts: "¿Cómo estás?" },
            { english: "I am fine", spanish: "ESTOY-BIEN", tts: "Estoy bien" },
            { english: "What time", spanish: "QUE-HORA", tts: "¿Qué hora es?" },
            { english: "Today", spanish: "HOY" },
            { english: "Tomorrow", spanish: "MAÑANA" },
            { english: "Now", spanish: "AHORA" }
        ],
        family: [
            { english: "Family", spanish: "FAMILIA" },
            { english: "Mother", spanish: "MADRE" },
            { english: "Father", spanish: "PADRE" },
            { english: "Brother", spanish: "HERMANO" },
            { english: "Sister", spanish: "HERMANA" },
            { english: "Son", spanish: "HIJO" },
            { english: "Daughter", spanish: "HIJA" },
            { english: "Grandfather", spanish: "ABUELO" },
            { english: "Grandmother", spanish: "ABUELA" },
            { english: "Uncle", spanish: "TIO", tts: "Tío" },
            { english: "Aunt", spanish: "TIA", tts: "Tía" },
            { english: "Cousin", spanish: "PRIMO" },
            { english: "Nephew", spanish: "SOBRINO" },
            { english: "Niece", spanish: "SOBRINA" },
            { english: "Grandson", spanish: "NIETO" },
            { english: "Granddaughter", spanish: "NIETA" },
            { english: "Husband", spanish: "ESPOSO" },
            { english: "Wife", spanish: "ESPOSA" },
            { english: "Baby", spanish: "BEBE", tts: "Bebé" },
            { english: "Child", spanish: "NIÑO", tts: "Niño" }
        ],
        colors: [
            { english: "Red", spanish: "ROJO" },
            { english: "Blue", spanish: "AZUL" },
            { english: "Yellow", spanish: "AMARILLO" },
            { english: "Green", spanish: "VERDE" },
            { english: "White", spanish: "BLANCO" },
            { english: "Black", spanish: "NEGRO" },
            { english: "Gray", spanish: "GRIS" },
            { english: "Brown", spanish: "MARRON", tts: "Marrón" },
            { english: "Pink", spanish: "ROSA" },
            { english: "Purple", spanish: "MORADO" },
            { english: "Orange", spanish: "NARANJA" },
            { english: "Gold", spanish: "ORO" },
            { english: "Silver", spanish: "PLATA" },
            { english: "Bright", spanish: "BRILLANTE" },
            { english: "Dark", spanish: "OSCURO" },
            { english: "Light", spanish: "CLARO" },
            { english: "Striped", spanish: "RAYADO" },
            { english: "Spotted", spanish: "MOTEADO" },
            { english: "Clear", spanish: "TRANSPARENTE" },
            { english: "Colorful", spanish: "COLORIDO" }
        ],
        body: [
            { english: "Head", spanish: "CABEZA" },
            { english: "Hair", spanish: "PELO" },
            { english: "Face", spanish: "CARA" },
            { english: "Eyes", spanish: "OJOS" },
            { english: "Nose", spanish: "NARIZ" },
            { english: "Mouth", spanish: "BOCA" },
            { english: "Ear", spanish: "OREJA" },
            { english: "Hand", spanish: "MANO" },
            { english: "Finger", spanish: "DEDO" },
            { english: "Foot", spanish: "PIE" },
            { english: "Arm", spanish: "BRAZO" },
            { english: "Leg", spanish: "PIERNA" },
            { english: "Back", spanish: "ESPALDA" },
            { english: "Shoulder", spanish: "HOMBRO" },
            { english: "Knee", spanish: "RODILLA" },
            { english: "Heart", spanish: "CORAZON", tts: "Corazón" },
            { english: "Blood", spanish: "SANGRE" },
            { english: "Brain", spanish: "CEREBRO" },
            { english: "Skin", spanish: "PIEL" },
            { english: "Neck", spanish: "CUELLO" }
        ],
        places: [
            { english: "House", spanish: "CASA" },
            { english: "Street", spanish: "CALLE" },
            { english: "Square", spanish: "PLAZA" },
            { english: "Park", spanish: "PARQUE" },
            { english: "Shop", spanish: "TIENDA" },
            { english: "Market", spanish: "MERCADO" },
            { english: "Restaurant", spanish: "RESTAURANTE" },
            { english: "Hospital", spanish: "HOSPITAL" },
            { english: "Cinema", spanish: "CINE" },
            { english: "School", spanish: "ESCUELA" },
            { english: "Library", spanish: "BIBLIOTECA" },
            { english: "Museum", spanish: "MUSEO" },
            { english: "Church", spanish: "IGLESIA" },
            { english: "Bank", spanish: "BANCO" },
            { english: "Pharmacy", spanish: "FARMACIA" },
            { english: "Zoo", spanish: "ZOO" },
            { english: "Beach", spanish: "PLAYA" },
            { english: "Garden", spanish: "JARDIN", tts: "Jardín" },
            { english: "Mountain", spanish: "MONTAÑA" },
            { english: "Bridge", spanish: "PUENTE" }
        ],
        clothes: [
            { english: "Clothes", spanish: "ROPA" },
            { english: "Shirt", spanish: "CAMISA" },
            { english: "T-shirt", spanish: "CAMISETA" },
            { english: "Pants", spanish: "PANTALONES" },
            { english: "Skirt", spanish: "FALDA" },
            { english: "Dress", spanish: "VESTIDO" },
            { english: "Jacket", spanish: "CHAQUETA" },
            { english: "Coat", spanish: "ABRIGO" },
            { english: "Sweater", spanish: "SUETER", tts: "Suéter" },
            { english: "Shoes", spanish: "ZAPATOS" },
            { english: "Socks", spanish: "CALCETINES" },
            { english: "Hat", spanish: "SOMBRERO" },
            { english: "Gloves", spanish: "GUANTES" },
            { english: "Belt", spanish: "CINTURON", tts: "Cinturón" },
            { english: "Tie", spanish: "CORBATA" },
            { english: "Boots", spanish: "BOTAS" },
            { english: "Scarf", spanish: "BUFANDA" },
            { english: "Glasses", spanish: "GAFAS" },
            { english: "Watch", spanish: "RELOJ" },
            { english: "Ring", spanish: "ANILLO" }
        ],
        nature: [
            { english: "Mountain", spanish: "MONTAÑA" },
            { english: "River", spanish: "RIO", tts: "Río" },
            { english: "Lake", spanish: "LAGO" },
            { english: "Forest", spanish: "BOSQUE" },
            { english: "Beach", spanish: "PLAYA" },
            { english: "Sea", spanish: "MAR" },
            { english: "Sun", spanish: "SOL" },
            { english: "Moon", spanish: "LUNA" },
            { english: "Stars", spanish: "ESTRELLAS" },
            { english: "Rain", spanish: "LLUVIA" },
            { english: "Flower", spanish: "FLOR" },
            { english: "Tree", spanish: "ARBOL", tts: "Árbol" },
            { english: "Grass", spanish: "HIERBA" },
            { english: "Sand", spanish: "ARENA" },
            { english: "Wind", spanish: "VIENTO" },
            { english: "Snow", spanish: "NIEVE" },
            { english: "Cloud", spanish: "NUBE" },
            { english: "Fire", spanish: "FUEGO" },
            { english: "Stone", spanish: "PIEDRA" },
            { english: "Island", spanish: "ISLA" }
        ]
    },
    chat: {
        birthday: [
            { prompt: "Cumpleaños feliz", english: "Happy Birthday", spanish: "GRACIAS", responseEnglish: "Thank you" },
            { prompt: "¿Cuántos años tienes?", english: "How old are you?", spanish: "VEINTE", responseEnglish: "Twenty" },
            { prompt: "Pide un deseo", english: "Make a wish", spanish: "DESEO-PAZ", responseEnglish: "I wish peace", tts: "Deseo paz" },
            { prompt: "Sopra las velas", english: "Blow out candles", spanish: "VALE", responseEnglish: "Okay" },
            { prompt: "¡Sorpresa!", english: "Surprise!", spanish: "GUAU", responseEnglish: "Wow" },
            { prompt: "Este es tu regalo", english: "This is for you", spanish: "QUE-ES", responseEnglish: "What is it?", tts: "Qué es" },
            { prompt: "¿Fiesta?", english: "Party?", spanish: "SI-CLARO", responseEnglish: "Yes sure" },
            { prompt: "¿Cuándo es?", english: "When is it?", spanish: "MAÑANA", responseEnglish: "Tomorrow" },
            { prompt: "Felicidades", english: "Congratulations", spanish: "ABRAZO", responseEnglish: "Hug" },
            { prompt: "¿Hay tarta?", english: "Is there cake?", spanish: "DE-CHOCOLATE", responseEnglish: "Chocolate" },
            { prompt: "Invitados", english: "Guests", spanish: "MUCHOS", responseEnglish: "Many" },
            { prompt: "Regalos", english: "Gifts", spanish: "ME-GUSTAN", responseEnglish: "I like them" },
            { prompt: "Música", english: "Music", spanish: "BAILEMOS", responseEnglish: "Let's dance" },
            { prompt: "Globos", english: "Balloons", spanish: "ROJOS", responseEnglish: "Red ones" },
            { prompt: "Diversión", english: "Fun", spanish: "MUCHA", responseEnglish: "A lot" },
            { prompt: "Amigos", english: "Friends", spanish: "TODOS", responseEnglish: "Everyone" },
            { prompt: "Brindis", english: "Toast", spanish: "SALUD", responseEnglish: "Cheers" },
            { prompt: "Un año más", english: "One more year", spanish: "VIEJO", responseEnglish: "Old" },
            { prompt: "¿Te gusta?", english: "Do you like it?", spanish: "ME-ENCANTA", responseEnglish: "I love it" },
            { prompt: "Gracias por venir", english: "Thanks for coming", spanish: "DE-NADA", responseEnglish: "You're welcome" }
        ],
        common: [
            { prompt: "¿Cómo estás?", english: "How are you?", spanish: "BIEN", responseEnglish: "Well" },
            { prompt: "Mucho gusto", english: "Nice to meet you", spanish: "IGUALMENTE", responseEnglish: "Likewise" },
            { prompt: "¿Qué tal?", english: "What's up?", spanish: "ESTUPENDO", responseEnglish: "Great" },
            { prompt: "¡Gracias!", english: "Thank you!", spanish: "DENADA", responseEnglish: "You're welcome", tts: "De nada" },
            { prompt: "¿Hablas inglés?", english: "Do you speak English?", spanish: "UNPOCO", responseEnglish: "A little", tts: "Un poco" },
            { prompt: "¿Dónde está...?", english: "Where is...?", spanish: "ALLI", responseEnglish: "Over there", tts: "Allí" },
            { prompt: "Perdón", english: "Pardon", spanish: "NOPASA-NADA", responseEnglish: "No problem", tts: "No pasa nada" },
            { prompt: "¿Puedo entrar?", english: "Can I enter?", spanish: "ADELANTE", responseEnglish: "Go ahead" },
            { prompt: "¿Cómo te llamas?", english: "What's your name?", spanish: "MELLAMO...", responseEnglish: "My name is...", tts: "Me llamo..." },
            { prompt: "¡Salud!", english: "Bless you!", spanish: "GRACIAS", responseEnglish: "Thank you" },
            { prompt: "¿Qué hora es?", english: "What time is it?", spanish: "LAS-DIEZ", responseEnglish: "Ten o'clock" },
            { prompt: "¡Buen provecho!", english: "Enjoy your meal!", spanish: "GRACIAS", responseEnglish: "Thank you" },
            { prompt: "¿Cuánto cuesta?", english: "How much is it?", spanish: "DIEZ-EUROS", responseEnglish: "Ten euros" },
            { prompt: "¡Hasta luego!", english: "See you later!", spanish: "ADIOS", responseEnglish: "Goodbye" },
            { prompt: "¡Lo siento!", english: "I'm sorry!", spanish: "NOTEPREOCUPES", responseEnglish: "Don't worry", tts: "No te preocupes" },
            { prompt: "¿Necesitas ayuda?", english: "Do you need help?", spanish: "SI-PORFAVOR", responseEnglish: "Yes please" },
            { prompt: "¡Felicidades!", english: "Congratulations!", spanish: "GRACIAS", responseEnglish: "Thank you" },
            { prompt: "¿Vienes?", english: "Are you coming?", spanish: "AHORA-MISMO", responseEnglish: "Right now" },
            { prompt: "¡Qué sorpresa!", english: "What a surprise!", spanish: "VERDAD", responseEnglish: "Right?" },
            { prompt: "¿Te gusta?", english: "Do you like it?", spanish: "ME-ENCANTA", responseEnglish: "I love it" }
        ],
        travel: [
            { prompt: "Buen viaje", english: "Have a good trip", spanish: "GRACIAS", responseEnglish: "Thank you" },
            { prompt: "¿Dónde está el baño?", english: "Where is the bathroom?", spanish: "ALFONDO", responseEnglish: "At the back", tts: "Al fondo" },
            { prompt: "¿A qué hora sale?", english: "What time does it leave?", spanish: "PRONTO", responseEnglish: "Soon" },
            { prompt: "¿Tiene pasaporte?", english: "Do you have a passport?", spanish: "AQUI-ESTA", responseEnglish: "Here it is", tts: "Aquí está" },
            { prompt: "¿Cuánto es?", english: "How much is it?", spanish: "VEINTE", responseEnglish: "Twenty" },
            { prompt: "Un billete, por favor", english: "One ticket, please", spanish: "CLARO", responseEnglish: "Sure" },
            { prompt: "¿Está libre?", english: "Is this seat free?", spanish: "SI", responseEnglish: "Yes" },
            { prompt: "¿Habla español?", english: "Do you speak Spanish?", spanish: "UN-POCO", responseEnglish: "A little" },
            { prompt: "Me he perdido", english: "I am lost", spanish: "AYUDA", responseEnglish: "Help" },
            { prompt: "Vamos a la playa", english: "Let's go to the beach", spanish: "VAMOS", responseEnglish: "Let's go" },
            { prompt: "¿Es este el tren?", english: "Is this the train?", spanish: "CREO-QUE-SI", responseEnglish: "I think so" },
            { prompt: "¿Dónde facturo?", english: "Where do I check in?", spanish: "MOSTRADOR", responseEnglish: "Counter" },
            { prompt: "Busco el hotel", english: "I'm looking for the hotel", spanish: "SIGUE-TODO-RECTO", responseEnglish: "Go straight on", tts: "Sigue todo recto" },
            { prompt: "¿Hay wifi?", english: "Is there wifi?", spanish: "LA-CLAVE-ES...", responseEnglish: "The password is...", tts: "La clave es..." },
            { prompt: "¿Necesita taxi?", english: "Do you need a taxi?", spanish: "NO-GRACIAS", responseEnglish: "No thanks" },
            { prompt: "Felices vacaciones", english: "Happy holidays", spanish: "IGUALMENTE", responseEnglish: "Likewise" },
            { prompt: "¿Llegamos ya?", english: "Are we there yet?", spanish: "CASI", responseEnglish: "Almost" },
            { prompt: "¿Puedo ver su mapa?", english: "Can I see your map?", spanish: "TENGA", responseEnglish: "Here you go" },
            { prompt: "¿A dónde va?", english: "Where are you going?", spanish: "CENTRO", responseEnglish: "Center" },
            { prompt: "Cuidado", english: "Watch out", spanish: "VALE", responseEnglish: "Okay" }
        ],
        dinner: [
            { prompt: "Tengo hambre", english: "I am hungry", spanish: "COMAMOS", responseEnglish: "Let's eat" },
            { prompt: "¿Qué quieres comer?", english: "What do you want to eat?", spanish: "POLLO", responseEnglish: "Chicken" },
            { prompt: "La cuenta, por favor", english: "The bill, please", spanish: "AHORA-MISMO", responseEnglish: "Right away" },
            { prompt: "¿Estaba rico?", english: "Was it delicious?", spanish: "MUCHO", responseEnglish: "Very" },
            { prompt: "Salud", english: "Cheers", spanish: "SALUD", responseEnglish: "Cheers" },
            { prompt: "¿Algo de beber?", english: "Something to drink?", spanish: "AGUA", responseEnglish: "Water" },
            { prompt: "¿Mesa para dos?", english: "Table for two?", spanish: "POR-FAVOR", responseEnglish: "Please" },
            { prompt: "¿Qué recomienda?", english: "What do you recommend?", spanish: "EL-PESCADO", responseEnglish: "The fish" },
            { prompt: "Buen provecho", english: "Enjoy your meal", spanish: "GRACIAS", responseEnglish: "Thanks" },
            { prompt: "Soy vegetariano", english: "I am vegetarian", spanish: "HAY-ENSALADA", responseEnglish: "There is salad" },
            { prompt: "¿Postre?", english: "Dessert?", spanish: "HELADO", responseEnglish: "Ice cream" },
            { prompt: "¿Café?", english: "Coffee?", spanish: "CON-LECHE", responseEnglish: "With milk" },
            { prompt: "Está caliente", english: "It is hot", spanish: "CUIDADO", responseEnglish: "Careful" },
            { prompt: "Más pan, por favor", english: "More bread, please", spanish: "SI-CLARO", responseEnglish: "Yes, sure" },
            { prompt: "No me gusta", english: "I don't like it", spanish: "LO-SIENTO", responseEnglish: "Sorry" },
            { prompt: "Me encanta", english: "I love it", spanish: "GENIAL", responseEnglish: "Great" },
            { prompt: "¿Desayuno?", english: "Breakfast?", spanish: "TOSTADAS", responseEnglish: "Toast" },
            { prompt: "¿Cena?", english: "Dinner?", spanish: "TARDE", responseEnglish: "Late" },
            { prompt: "¿Almuerzo?", english: "Lunch?", spanish: "MEDIODIA", responseEnglish: "Noon", tts: "Mediodía" },
            { prompt: "Estoy lleno", english: "I am full", spanish: "YO-TAMBIEN", responseEnglish: "Me too", tts: "Yo también" }
        ],
        feelings: [
            { prompt: "Estoy feliz", english: "I am happy", spanish: "QUE-BIEN", responseEnglish: "How good", tts: "Qué bien" },
            { prompt: "Estoy triste", english: "I am sad", spanish: "POR-QUE", responseEnglish: "Why?", tts: "Por qué" },
            { prompt: "Tengo miedo", english: "I am scared", spanish: "NO-PASA-NADA", responseEnglish: "It's okay" },
            { prompt: "Estoy cansado", english: "I am tired", spanish: "DUERME", responseEnglish: "Sleep" },
            { prompt: "Estoy enfadado", english: "I am angry", spanish: "TRANQUILO", responseEnglish: "Calm down" },
            { prompt: "Estoy aburrido", english: "I am bored", spanish: "JUGUEMOS", responseEnglish: "Let's play" },
            { prompt: "Me siento mal", english: "I feel sick", spanish: "MEDICO", responseEnglish: "Doctor" },
            { prompt: "Estoy nervioso", english: "I am nervous", spanish: "RESPIRA", responseEnglish: "Breathe" },
            { prompt: "¡Te quiero!", english: "I love you!", spanish: "Y-YO", responseEnglish: "And I you" },
            { prompt: "Te extraño", english: "I miss you", spanish: "VEN-PRONTO", responseEnglish: "Come soon" },
            { prompt: "Estoy emocionado", english: "I am excited", spanish: "YO-TAMBIEN", responseEnglish: "Me too" },
            { prompt: "Tengo frío", english: "I am cold", spanish: "CHAQUETA", responseEnglish: "Jacket" },
            { prompt: "Tengo calor", english: "I am hot", spanish: "AGUA", responseEnglish: "Water" },
            { prompt: "Estoy ocupado", english: "I am busy", spanish: "LUEGO", responseEnglish: "Later" },
            { prompt: "Me siento solo", english: "I feel lonely", spanish: "LLAMAME", responseEnglish: "Call me", tts: "Llámame" },
            { prompt: "Tengo sueño", english: "I am sleepy", spanish: "CAMA", responseEnglish: "Bed" },
            { prompt: "Tengo sed", english: "I am thirsty", spanish: "BEBE", responseEnglish: "Drink" },
            { prompt: "Estoy perdido", english: "I am lost", spanish: "MAPA", responseEnglish: "Map" },
            { prompt: "Me duele", english: "It hurts", spanish: "DONDE", responseEnglish: "Where?", tts: "Dónde" },
            { prompt: "¡Sorpresa!", english: "Surprise!", spanish: "GUAU", responseEnglish: "Wow" }
        ]
    }
};


class Cazapalabras {
    constructor() {
        this.gridSize = 14;
        this.grid = [];
        this.targetWords = [];
        this.foundWords = [];
        this.score = 0;
        this.currentMode = 'translate'; // 'translate', 'interpret', or 'chat'
        this.isSelecting = false;
        this.selectionStart = null;
        this.currentSelection = [];
        this.selectionPath = [];
        this.selectedCategories = []; // Categories selected FOR THE CURRENT MODE

        this.init();
    }

    init() {
        this.setupDOM();
        this.setDefaultCategories();
        this.renderCategories();
        this.startNewGame();
    }

    setDefaultCategories() {
        const vocabSource = (this.currentMode === 'chat') ? 'chat' : 'translate';
        const available = Object.keys(VOCABULARY[vocabSource]);
        if (this.currentMode === 'chat') {
            this.selectedCategories = [available[0]];
        } else {
            this.selectedCategories = ['conversation', 'animals'];
        }
    }

    setupDOM() {
        this.gridElement = document.getElementById('hex-grid');
        this.wordListElement = document.getElementById('word-list');
        this.scoreElement = document.getElementById('score-val');
        this.foundElement = document.getElementById('found-val');
        this.modeLabel = document.getElementById('current-mode-label');

        document.getElementById('mode-translate').onclick = () => this.switchMode('translate');
        document.getElementById('mode-interpret').onclick = () => this.switchMode('interpret');
        document.getElementById('mode-chat').onclick = () => this.switchMode('chat');
        document.getElementById('new-game-btn').onclick = () => this.startNewGame();

        // Mouse events for selection
        window.addEventListener('mouseup', () => this.endSelection());
    }

    switchMode(mode) {
        if (this.currentMode === mode) return;
        this.currentMode = mode;

        document.getElementById('mode-translate').classList.toggle('active', mode === 'translate');
        document.getElementById('mode-interpret').classList.toggle('active', mode === 'interpret');
        document.getElementById('mode-chat').classList.toggle('active', mode === 'chat');

        let label = "";
        if (mode === 'translate') label = "Spanish -> English";
        else if (mode === 'interpret') label = "English -> Spanish";
        else label = "Chat";

        this.modeLabel.textContent = label;

        this.setDefaultCategories();
        this.renderCategories();
        this.startNewGame();
    }

    startNewGame() {
        this.foundWords = [];
        this.grid = [];
        this.currentSelection = [];
        this.selectionPath = [];

        // Select random words from vocabulary based on selected categories for current mode
        let pool = [];
        const vocabSource = (this.currentMode === 'chat') ? 'chat' : 'translate';
        const modeVocab = VOCABULARY[vocabSource];
        this.selectedCategories.forEach(cat => {
            if (modeVocab[cat]) {
                pool = pool.concat(modeVocab[cat]);
            }
        });

        // Final fallback if no categories selected or available
        if (pool.length === 0) {
            const firstCat = Object.keys(modeVocab)[0];
            pool = modeVocab[firstCat];
        }

        // Deep copy selected words to avoid reference bugs
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        this.targetWords = shuffled.slice(0, Math.min(8, shuffled.length)).map(item => ({ ...item }));

        if (this.currentMode === 'chat') {
            // No longer need activePromptIndex as all are shown
        }

        this.generateGrid();
        this.renderGrid();
        this.renderWordList();
        this.updateStats();
    }

    updatePrompt() {
        // Redundant with new UI
    }

    generateGrid() {
        // Initialize empty grid
        for (let r = 0; r < this.gridSize; r++) {
            this.grid[r] = [];
            for (let c = 0; c < this.gridSize; c++) {
                this.grid[r][c] = {
                    char: '',
                    r, c,
                    isPartOfWord: false,
                    isFound: false,
                    isFirstLetter: false,
                    isHinted: false
                };
            }
        }

        // Place target words
        this.targetWords.forEach(item => {
            // Sanitize word for grid placement (only A-Z and Ñ)
            // Logic: 
            // - chat: use item.spanish
            // - translate (ES->EN): use item.english
            // - interpret (EN->ES): use item.spanish
            let rawWord = "";
            if (this.currentMode === 'chat') rawWord = item.spanish;
            else if (this.currentMode === 'translate') rawWord = item.english;
            else rawWord = item.spanish; // interpret

            const gridWord = rawWord.replace(/[^A-ZÑ]/gi, "").toUpperCase();
            item.gridWord = gridWord;
            item.path = this.placeWord(gridWord);
            item.hintIdxs = [];
            if (item.path && item.path.length > 0) {
                // Auto-highlight first letter
                item.hintIdxs.push(0);
                const pos = item.path[0];
                this.grid[pos.r][pos.c].isFirstLetter = true;
            }
        });

        // Fill remaining spaces
        const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        for (let r = 0; r < this.gridSize; r++) {
            for (let c = 0; c < this.gridSize; c++) {
                if (this.grid[r][c].char === '') {
                    this.grid[r][c].char = alphabet[Math.floor(Math.random() * alphabet.length)];
                }
            }
        }
    }

    placeWord(word) {
        const directions = [
            [0, 1],   // E
            [0, -1],  // W
            [-1, 0],  // NE (even row) or NW (odd row) - wait, offset coords logic
            [-1, 1],
            [1, 0],
            [1, 1]
        ];

        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 100) {
            attempts++;
            const startR = Math.floor(Math.random() * this.gridSize);
            const startC = Math.floor(Math.random() * this.gridSize);
            const dirIndex = Math.floor(Math.random() * 6);

            if (this.canPlaceWord(word, startR, startC, dirIndex)) {
                const path = this.doPlaceWord(word, startR, startC, dirIndex);
                placed = true;
                return path;
            }
        }
        return null;
    }

    // Hex offset neighbors (Odd-R)
    getNeighbor(r, c, dirIndex) {
        const isOdd = r % 2 !== 0;
        // Directions for Odd-R staggered grid (odd rows shifted right)
        const dirs = isOdd ? [
            [0, 1], [0, -1], [-1, 0], [-1, 1], [1, 0], [1, 1]
        ] : [
            [0, 1], [0, -1], [-1, -1], [-1, 0], [1, -1], [1, 0]
        ];

        const [dr, dc] = dirs[dirIndex];
        return { r: r + dr, c: c + dc };
    }

    canPlaceWord(word, r, c, dirIndex) {
        let currR = r;
        let currC = c;

        for (let i = 0; i < word.length; i++) {
            if (currR < 0 || currR >= this.gridSize || currC < 0 || currC >= this.gridSize) return false;

            // Strict overlap prevention: cell must be empty
            if (this.grid[currR][currC].isPartOfWord) return false;

            const next = this.getNeighbor(currR, currC, dirIndex);
            currR = next.r;
            currC = next.c;
        }
        return true;
    }

    doPlaceWord(word, r, c, dirIndex) {
        let currR = r;
        let currC = c;
        const path = [];

        for (let i = 0; i < word.length; i++) {
            this.grid[currR][currC].char = word[i];
            this.grid[currR][currC].isPartOfWord = true;
            path.push({ r: currR, c: currC });
            const next = this.getNeighbor(currR, currC, dirIndex);
            currR = next.r;
            currC = next.c;
        }
        return path;
    }

    renderGrid() {
        this.gridElement.innerHTML = '';
        for (let r = 0; r < this.gridSize; r++) {
            const rowDiv = document.createElement('div');
            rowDiv.className = `hex-row ${r % 2 === 0 ? 'even' : 'odd'}`;

            for (let c = 0; c < this.gridSize; c++) {
                const hex = document.createElement('div');
                hex.className = 'hexagon';
                hex.textContent = this.grid[r][c].char;
                hex.dataset.r = r;
                hex.dataset.c = c;
                if (this.grid[r][c].isFirstLetter) hex.classList.add('first-letter');
                if (this.grid[r][c].isHinted) hex.classList.add('hinted');

                hex.addEventListener('mousedown', (e) => this.startSelection(r, c, hex));
                hex.addEventListener('mouseenter', (e) => this.updateSelection(r, c, hex));

                this.grid[r][c].element = hex;
                rowDiv.appendChild(hex);
            }
            this.gridElement.appendChild(rowDiv);
        }
    }

    renderWordList() {
        this.wordListElement.innerHTML = '';
        this.targetWords.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'word-item';

            // Set translation for tooltip ONLY in chat mode
            if (this.currentMode === 'chat') {
                const trans = item.responseEnglish ? item.responseEnglish : item.english;
                div.setAttribute('data-translation', `${item.english} → ${trans}`);
            }

            div.onclick = () => {
                if (this.currentMode === 'chat' && item.prompt) {
                    const response = item.tts || item.spanish;
                    // Concatenate with a slight pause for the TTS engine
                    this.speak(`${item.prompt}. ${response}`);
                } else if (this.currentMode === 'interpret') {
                    const textToSpeak = item.tts || item.spanish;
                    this.speak(textToSpeak);
                } else {
                    // translate mode (showing Spanish, finding English)
                    // and we want to hear Spanish
                    const textToSpeak = item.tts || item.spanish;
                    this.speak(textToSpeak);
                }
            };

            const word = item.spanish;
            const gridTarget = item.gridWord || (this.currentMode === 'translate' ? item.english : item.spanish);
            if (this.foundWords.includes(gridTarget)) {
                div.classList.add('found');
            }

            const info = document.createElement('div');
            info.style.display = 'flex';
            info.style.alignItems = 'center';

            const label = document.createElement('span');
            // label logic:
            // - chat: item.prompt
            // - translate: item.spanish (searching for English)
            // - interpret: item.english (searching for Spanish)
            if (this.currentMode === 'chat') label.textContent = item.prompt || item.english;
            else if (this.currentMode === 'translate') label.textContent = item.spanish;
            else label.textContent = item.english;

            info.appendChild(label);

            if (!this.foundWords.includes(gridTarget)) {
                const hintBtn = document.createElement('button');
                hintBtn.className = 'hint-btn';
                hintBtn.textContent = 'Hint';
                hintBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.giveHint(item);
                };
                info.appendChild(hintBtn);
            }
            div.appendChild(info);

            if (this.foundWords.includes(gridTarget)) {
                const span = document.createElement('span');
                span.textContent = gridTarget;
                span.style.fontWeight = '700';
                div.appendChild(span);
            }

            this.wordListElement.appendChild(div);
        });
    }

    giveHint(item) {
        if (!item.path) return;

        // Find indices not yet hinted
        const remainingIdxs = [];
        item.path.forEach((p, i) => {
            if (!item.hintIdxs.includes(i)) remainingIdxs.push(i);
        });

        if (remainingIdxs.length > 0) {
            const randomIdx = remainingIdxs[Math.floor(Math.random() * remainingIdxs.length)];
            item.hintIdxs.push(randomIdx);

            const pos = item.path[randomIdx];
            const cell = this.grid[pos.r][pos.c];
            cell.isHinted = true;
            cell.element.classList.add('hinted');
        }
    }

    updateStats() {
        this.scoreElement.textContent = this.score;
        this.foundElement.textContent = `${this.foundWords.length}/${this.targetWords.length}`;
    }

    startSelection(r, c, element) {
        this.isSelecting = true;
        this.selectionPath = [{ r, c }];
        this.currentSelection = [this.grid[r][c].char];
        element.classList.add('selected');
    }

    updateSelection(r, c, element) {
        if (!this.isSelecting) return;

        // Already selected?
        if (this.selectionPath.some(p => p.r === r && p.c === c)) {
            // If it's the second to last, backtrack
            if (this.selectionPath.length > 1) {
                const secondToLast = this.selectionPath[this.selectionPath.length - 2];
                if (secondToLast.r === r && secondToLast.c === c) {
                    const last = this.selectionPath.pop();
                    this.grid[last.r][last.c].element.classList.remove('selected');
                    this.currentSelection.pop();
                }
            }
            return;
        }

        // Check adjacency and straight line
        const last = this.selectionPath[this.selectionPath.length - 1];
        if (this.areNeighbors(last.r, last.c, r, c)) {
            // For now, allow any adjacent. 
            // Better: force straight line after 2nd hex.
            if (this.selectionPath.length >= 2) {
                if (!this.isInLine(this.selectionPath[this.selectionPath.length - 2], last, { r, c })) {
                    return;
                }
            }

            this.selectionPath.push({ r, c });
            this.currentSelection.push(this.grid[r][c].char);
            element.classList.add('selected');
        }
    }

    areNeighbors(r1, c1, r2, c2) {
        for (let i = 0; i < 6; i++) {
            const n = this.getNeighbor(r1, c1, i);
            if (n.r === r2 && n.c === c2) return true;
        }
        return false;
    }

    isInLine(p1, p2, p3) {
        // Simple line check: direction between p1->p2 must be same as p2->p3
        let dir1 = -1;
        for (let i = 0; i < 6; i++) {
            const n = this.getNeighbor(p1.r, p1.c, i);
            if (n.r === p2.r && n.c === p2.c) {
                dir1 = i;
                break;
            }
        }

        const n3 = this.getNeighbor(p2.r, p2.c, dir1);
        return n3.r === p3.r && n3.c === p3.c;
    }

    endSelection() {
        if (!this.isSelecting) return;
        this.isSelecting = false;

        const selectedWord = this.currentSelection.join('');
        this.checkWord(selectedWord);

        // Clear selection visual
        this.selectionPath.forEach(p => {
            this.grid[p.r][p.c].element.classList.remove('selected');
        });
        this.selectionPath = [];
        this.currentSelection = [];
    }

    checkWord(word) {
        const reversedWord = word.split('').reverse().join('');

        const targetWordItem = this.targetWords.find(item => {
            const target = item.gridWord;
            return (target === word || target === reversedWord) && !this.foundWords.includes(target);
        });

        if (targetWordItem) {
            const actualWord = targetWordItem.gridWord;
            this.foundWords.push(actualWord);

            // Mark as found in grid
            this.selectionPath.forEach(p => {
                this.grid[p.r][p.c].isFound = true;
                this.grid[p.r][p.c].element.classList.add('found');
            });

            this.score += actualWord.length * 10;
            this.updateStats();
            this.renderWordList();

            if (this.currentMode === 'chat') {
                // Prompt index logic removed
            }

            if (this.foundWords.length === this.targetWords.length) {
                setTimeout(() => alert('¡Excelente! level complete.'), 500);
            }
        }
    }

    renderCategories() {
        const container = document.getElementById('category-selection');
        if (!container) return;

        container.innerHTML = '';
        const vocabSource = (this.currentMode === 'chat') ? 'chat' : 'translate';
        const modeVocab = VOCABULARY[vocabSource];
        Object.keys(modeVocab).forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `category-tag ${this.selectedCategories.includes(cat) ? 'active' : ''}`;
            btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            btn.onclick = () => this.toggleCategory(cat, btn);
            container.appendChild(btn);
        });
    }

    toggleCategory(cat, btn) {
        if (this.selectedCategories.includes(cat)) {
            if (this.selectedCategories.length > 1) {
                this.selectedCategories = this.selectedCategories.filter(c => c !== cat);
            }
        } else {
            this.selectedCategories.push(cat);
        }
        this.renderCategories();
        this.startNewGame();
    }

    speak(text) {
        if (!window.speechSynthesis) return;

        // Stop any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9; // Slightly slower for clarity
        window.speechSynthesis.speak(utterance);
    }
}

new Cazapalabras();
