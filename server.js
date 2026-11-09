
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));
// AXION AI HOMEPAGE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// AXION AI — BRAIN VERSION 2.0
const knowledge
 = {

  // TECHNOLOGY
  "what is artificial intelligence used for": "AI is used in education, medicine, research, translation, automation, entertainment and many other fields.",
  "what is virtual reality": "Virtual reality is technology that creates an immersive computer-generated environment.",
  "what is augmented reality": "Augmented reality adds digital information or objects to a view of the real world.",
  "what is an application": "An application is software designed to perform particular tasks for users.",
  "what is a database": "A database is an organised collection of information that can be stored, searched and managed.",
  "what is robotics": "Robotics is the field of designing, building and programming robots.",
  "what is automation": "Automation uses technology to perform tasks with reduced human involvement.",
  "what is the internet of things": "The Internet of Things connects physical devices to the internet so they can exchange information.",
  "what is a microchip": "A microchip is a small electronic circuit built on a semiconductor material.",
  "what is an invention": "An invention is a new device, process or method created to solve a problem or perform a task.",

  // ARTS AND ENTERTAINMENT
  "what is art": "Art is a form of human expression that includes painting, drawing, sculpture, music and other creative activities.",
  "what is music": "Music is an art form that combines sounds, rhythms and melodies.",
  "what is photography": "Photography is the art and practice of capturing images using cameras.",
  "what is cinema": "Cinema is the art and industry of making and showing films.",
  "what is animation": "Animation is the process of creating the illusion of movement through a sequence of images.",
  "what is literature": "Literature is creative written work such as novels, poems, short stories and plays.",
  "what is sport": "Sport is physical activity or competition involving skill, rules and sometimes teams.",
  "what is football": "Football is a team sport in which players try to score by moving a ball into the opposing team's goal.",
  "what is basketball": "Basketball is a team sport in which players score by shooting a ball through a hoop.",
  "what is chess": "Chess is a strategy board game played between two players using 16 pieces each.",

  // NATURE
  "what is nature": "Nature includes living organisms, landscapes, water, air, rocks and natural processes.",
  "what is an ecosystem": "An ecosystem is a community of living organisms interacting with each other and their environment.",
  "what is biodiversity": "Biodiversity is the variety of life found on Earth, including plants, animals and microorganisms.",
  "what is pollution": "Pollution is the introduction of harmful substances or energy into the environment.",
  "what is global warming": "Global warming is the long-term rise in Earth's average surface temperature, mainly caused by greenhouse gases from human activities.",
  "what is climate change": "Climate change refers to long-term changes in temperatures and weather patterns.",
  "what is recycling": "Recycling is the process of turning used materials into new products.",
  "what is deforestation": "Deforestation is the removal of forests, often to make space for agriculture, buildings or other activities.",
  "what is conservation": "Conservation means protecting and managing natural resources and wildlife.",
  "what is renewable energy": "Renewable energy comes from naturally replenished sources such as sunlight, wind and flowing water.",
  "what is a food chain": "A food chain shows how energy moves from one organism to another through feeding.",
  "what is extinction": "Extinction occurs when the last individual of a species dies.",

  // SOCIETY
  "what is society": "Society is a group of people living together in an organised community.",
  "what is culture": "Culture includes the traditions, beliefs, languages, values and customs of a group of people.",
  "what is religion": "Religion is a system of beliefs and practices concerning spiritual or sacred matters.",
  "what is a government": "A government is the system or group of people responsible for managing a country or community.",
  "what is a law": "A law is a rule established and enforced by an authority.",
  "what is human rights": "Human rights are basic rights and freedoms that belong to every person.",
  "what is citizenship": "Citizenship is the legal status of belonging to a particular country.",
  "what is urbanization": "Urbanization is the growth of towns and cities as people move into urban areas.",
  "what is migration": "Migration is the movement of people from one place to another.",
  "what is civilization": "A civilization is a complex human society with organised communities, institutions, culture and systems.",
  "what is language": "Language is a system of communication using spoken, written or signed symbols.",
  "what is tradition": "A tradition is a custom or belief passed from one generation to another.",

  // BUSINESS AND ECONOMICS
  "what is business": "A business is an organisation or activity that provides goods or services.",
  "what is money": "Money is something generally accepted as a medium of exchange, a store of value and a unit of account.",
  "what is profit": "Profit is the money remaining when total costs are subtracted from total revenue.",
  "what is a loss": "A business makes a loss when its total expenses are greater than its revenue.",
  "what is trade": "Trade is the buying and selling or exchange of goods and services.",
  "what is production": "Production is the process of creating goods or providing services.",
  "what is consumption": "Consumption is the use of goods and services to satisfy needs and wants.",
  "what is a customer": "A customer is a person or organisation that buys goods or services.",
  "what is an entrepreneur": "An entrepreneur is someone who starts or manages a business and takes financial risks.",
  "what is a market": "A market is a place or system where buyers and sellers exchange goods and services.",
  "what is supply": "Supply is the quantity of a good or service that producers are willing and able to sell.",
  "what is demand": "Demand is the quantity of a good or service that consumers are willing and able to buy.",
  "what is inflation": "Inflation is a general increase in prices over time, reducing the purchasing power of money.",
  "what is a bank": "A bank is a financial institution that provides services such as saving, lending and transferring money.",

  // UNIVERSE
  "what is the universe": "The universe is everything that exists, including space, time, matter, energy, galaxies and all celestial objects.",
  "how old is the universe": "The universe is approximately 13.8 billion years old.",
  "what is the big bang": "The Big Bang is the leading scientific explanation for how the universe began expanding from an extremely hot and dense state.",
  "what is a planet": "A planet is a celestial body that orbits a star, is nearly round and meets other astronomical classification conditions.",
  "what is a moon": "A moon is a natural object that orbits a planet or another celestial body.",
  "what is a comet": "A comet is an icy object that travels around the Sun and can develop a glowing tail.",
  "what is an asteroid": "An asteroid is a small rocky object that orbits the Sun.",
  "what is a meteor": "A meteor is the streak of light produced when a space rock enters Earth's atmosphere.",
  "what is the milky way": "The Milky Way is the galaxy that contains our solar system.",
  "what is a nebula": "A nebula is a huge cloud of gas and dust in space.",
  "what is an eclipse": "An eclipse happens when one celestial body blocks light from or casts a shadow on another.",
  "what is the speed of light": "Light travels through a vacuum at approximately 299,792,458 metres per second.",

  // SCIENCE
  "what is matter": "Matter is anything that has mass and occupies space.",
  "what are the three states of matter": "The three common states of matter are solid, liquid and gas. Plasma is another state.",
  "what is evaporation": "Evaporation is the process in which a liquid changes into a gas at its surface.",
  "what is condensation": "Condensation happens when a gas changes into a liquid.",
  "what is melting": "Melting is the change of state from solid to liquid.",
  "what is freezing": "Freezing is the change of state from liquid to solid.",
  "what is energy": "Energy is the ability to cause change or do work.",
  "what is electricity": "Electricity is associated with electric charges and their movement.",
  "what is magnetism": "Magnetism is a physical phenomenon caused by magnetic fields.",
  "what is sound": "Sound is a vibration that travels through a medium such as air, water or solids.",
  "what is light": "Light is electromagnetic radiation that makes vision possible.",
  "what is friction": "Friction is a force that opposes motion between surfaces in contact.",
  "what is force": "A force is a push or pull that can change an object's motion or shape.",
  "what is density": "Density is mass divided by volume.",
  "what is an atom": "An atom is the smallest unit of an element that retains its chemical properties.",
  "what is a molecule": "A molecule is a group of two or more atoms chemically bonded together.",

  // EDUCATION AND STUDIES
  "what is education": "Education is the process of gaining knowledge, skills, values and understanding.",
  "what is learning": "Learning is the process of gaining new knowledge or improving skills through study and experience.",
  "what is revision": "Revision is reviewing information you have already studied to improve understanding and memory.",
  "how can i study better": "Create a study timetable, practise questions, take short breaks and review your notes regularly.",
  "what is an examination": "An examination is an assessment used to measure a student's knowledge and understanding.",
  "what is a hypothesis": "A hypothesis is a testable proposed explanation or prediction.",
  "what is an experiment": "An experiment is a scientific test designed to investigate a question or hypothesis.",
  "what is observation": "Observation is carefully noticing and recording information using the senses or scientific instruments.",
  "what is a conclusion": "A conclusion is a final statement based on evidence, findings or reasoning.",
  "what is a noun": "A noun is a word that names a person, place, thing or idea.",
  "what is a verb": "A verb is a word that expresses an action, occurrence or state.",
  "what is an adjective": "An adjective is a word that describes a noun or pronoun.",
  "what is an adverb": "An adverb describes or modifies a verb, adjective or another adverb.",
  "what is a sentence": "A sentence is a group of words that expresses a complete thought.",
  "what is a paragraph": "A paragraph is a group of related sentences that develop one main idea.",
  "what is a synonym": "A synonym is a word with the same or nearly the same meaning as another word.",
  "what is an antonym": "An antonym is a word with the opposite meaning of another word.",
  "what is a metaphor": "A metaphor describes something by saying it is something else, without using like or as.",
  "what is a simile": "A simile compares two things using words such as like or as.",
  "what is a verb tense": "Verb tense shows when an action happens, such as in the past, present or future.",
  "what is a research project": "A research project is an organised investigation into a topic using information and evidence.",
  "what is a bibliography": "A bibliography is a list of sources used when preparing a piece of work.",

  // HUMAN BEHAVIOUR
  "what are emotions": "Emotions are feelings or responses that people experience, such as happiness, sadness, fear and anger.",
  "what is intelligence": "Intelligence is the ability to learn, understand, reason and solve problems.",
  "what is memory": "Memory is the ability of the brain to store and recall information and experiences.",
  "what is personality": "Personality is the combination of characteristics, thoughts and behaviours that make a person unique.",
  "what is confidence": "Confidence is believing in your abilities and having trust in yourself.",
  "what is kindness": "Kindness means treating others with care, respect and consideration.",
  "what is empathy": "Empathy is the ability to understand or share another person's feelings.",
  "what is teamwork": "Teamwork is when people cooperate to achieve a shared goal.",
  "what is communication": "Communication is the process of sharing information, ideas and feelings.",
  "what is leadership": "Leadership is the ability to guide, motivate and support others towards a goal.",
  "what is creativity": "Creativity is the ability to develop original ideas and find new ways to solve problems.",
  "what is critical thinking": "Critical thinking means examining information carefully before making a judgement.",
  "why do people dream": "Dreams are experiences that often happen during sleep and involve brain activity, memories and emotions.",
  "why do people laugh": "Laughter is a human response often connected to humour, happiness and social interaction.",

  // HUMAN BODY
  "what is a human being": "A human being is a living organism belonging to the species Homo sapiens.",
  "what are cells": "Cells are the basic structural and functional units of living organisms.",
  "what are tissues": "Tissues are groups of similar cells working together to perform a particular function.",
  "what are organs": "Organs are body structures made of different tissues that work together to perform specific jobs.",
  "what is anatomy": "Anatomy is the study of the structure and parts of the body.",
  "what is physiology": "Physiology is the study of how living organisms and their body parts function.",
  "what is the nervous system": "The nervous system includes the brain, spinal cord and nerves. It receives and sends information throughout the body.",
  "what is the digestive system": "The digestive system breaks down food so the body can absorb nutrients.",
  "what is the respiratory system": "The respiratory system helps the body take in oxygen and remove carbon dioxide.",
  "what is the circulatory system": "The circulatory system moves blood around the body using the heart and blood vessels.",
  "what is the immune system": "The immune system helps protect the body against infections and harmful substances.",
  "what is the skeletal system": "The skeletal system supports the body, protects organs and works with muscles to produce movement.",
  "what is the muscular system": "The muscular system helps the body move, maintain posture and produce heat.",
  "what is the liver": "The liver processes nutrients, produces bile and performs many important functions.",
  "what are kidneys": "The kidneys filter waste and extra water from the blood to produce urine.",
  "what is the stomach": "The stomach is an organ that mixes food with digestive juices to help break it down.",
  "why do humans sleep": "Sleep helps the body rest, repair itself and support memory, learning and brain function.",
  "why do humans sweat": "Sweating helps regulate body temperature by cooling the skin as sweat evaporates.",
  "why do humans breathe": "Humans breathe to bring oxygen into the body and remove carbon dioxide.",
  "why do humans need water": "Water helps regulate body temperature, transport substances and support many important body functions.",

  // GEOGRAPHY
  "what is africa": "Africa is the second-largest continent and is home to many countries, cultures, languages and wildlife.",
  "what is asia": "Asia is the largest continent by land area and population.",
  "what is europe": "Europe is a continent known for its diverse countries, history and cultures.",
  "what is antarctica": "Antarctica is the coldest continent and is mostly covered in ice.",
  "what is the sahara desert": "The Sahara is the largest hot desert in the world, located in North Africa.",
  "what is the longest river": "The Nile is traditionally considered the world's longest river, although some measurements place the Amazon first.",
  "what is the highest mountain": "Mount Everest is the highest mountain above sea level.",
  "what is a desert": "A desert is an area that receives very little precipitation.",
  "what is an island": "An island is a piece of land completely surrounded by water.",
  "what is a peninsula": "A peninsula is land surrounded by water on three sides.",

  // ANIMALS
  "what is the largest animal": "The blue whale is the largest animal known to have ever lived.",
  "what is the fastest land animal": "The cheetah is the fastest land animal.",
  "what is the tallest animal": "The giraffe is the tallest living land animal.",
  "what is the largest land animal": "The African bush elephant is the largest living land animal.",
  "what is photosynthesis": "Photosynthesis is the process by which plants use sunlight, water and carbon dioxide to make food.",
  "what do herbivores eat": "Herbivores are animals that mainly eat plants.",
  "what do carnivores eat": "Carnivores are animals that mainly eat other animals.",
  "what are omnivores": "Omnivores are animals that eat both plants and animals.",
  "what is a mammal": "A mammal is a warm-blooded vertebrate that has hair or fur and feeds its young with milk.",
  "what is an insect": "An insect is an animal with six legs, three main body sections and usually a pair of antennae.",

  // HUMAN BODY
  "how many bones are in the human body": "A typical adult human body has 206 bones.",
  "what is the largest organ": "The skin is the largest organ of the human body.",
  "what does the heart do": "The heart pumps blood around the body.",
  "what do lungs do": "The lungs help us breathe by taking in oxygen and removing carbon dioxide.",
  "what does the brain do": "The brain controls and coordinates many activities in the body.",
  "what is blood": "Blood is a body fluid that transports oxygen, nutrients and other substances.",
  "what is the skeleton": "The skeleton is the framework of bones that supports and protects the body.",
  "what are muscles": "Muscles are tissues that contract to help the body move.",

  // TECHNOLOGY
  "what is a smartphone": "A smartphone is a mobile device that combines communication, computing and internet access.",
  "what is a website": "A website is a collection of related web pages available on the internet.",
  "what is a server": "A server is a computer or software system that provides services or information to other computers.",
  "what is coding": "Coding is writing instructions in a programming language to make software work.",
  "what is an algorithm": "An algorithm is a set of steps used to solve a problem or complete a task.",
  "what is a database": "A database is an organised collection of information that can be stored and retrieved.",
  "what is cybersecurity": "Cybersecurity is the practice of protecting computers, networks and information from digital attacks.",
  "what is cloud computing": "Cloud computing allows people to use computing services over the internet.",
  "what is machine learning": "Machine learning is a type of artificial intelligence where computers learn patterns from data.",
  "what is an operating system": "An operating system manages computer hardware and software. Examples include Windows, Linux and macOS.",

  // MATHEMATICS
  "what is an even number": "An even number is an integer that can be divided by 2 without a remainder.",
  "what is an odd number": "An odd number is an integer that leaves a remainder of 1 when divided by 2.",
  "what is a prime number": "A prime number is a whole number greater than 1 that has exactly two positive factors: 1 and itself.",
  "what is a fraction": "A fraction represents part of a whole and is written using a numerator and denominator.",
  "what is a percentage": "A percentage is a number expressed as a fraction of 100.",
  "what is an algebra": "Algebra is a branch of mathematics that uses letters and symbols to represent numbers and relationships.",
  "what is a square root": "A square root is a number that, when multiplied by itself, gives the original number.",
  "what is an angle": "An angle is formed when two lines or rays meet at a common point.",
  "what is a triangle": "A triangle is a polygon with three sides and three angles.",
  "what is a rectangle": "A rectangle is a four-sided shape with four right angles.",

  // HISTORY AND INVENTIONS
  "who invented the telephone": "Alexander Graham Bell is widely credited with inventing and patenting the first practical telephone.",
  "who invented the light bulb": "Thomas Edison helped develop a commercially practical incandescent light bulb, building on earlier inventors' work.",
  "who invented the airplane": "The Wright brothers, Orville and Wilbur, achieved the first successful powered airplane flight in 1903.",
  "who invented the computer": "Modern computing developed through the work of many people, including Charles Babbage, Alan Turing and others.",
  "what was ancient egypt": "Ancient Egypt was a civilisation in northeastern Africa known for its pyramids, pharaohs and achievements.",
  "what is the industrial revolution": "The Industrial Revolution was a period of major technological and economic change that began in Britain in the 18th century.",
  "what is independence": "Independence is the freedom of a country or people to govern themselves.",
  "what is democracy": "Democracy is a system of government in which people have a role in choosing their leaders.",

  // THE WORLD
  "what is the world": "The world is the Earth and everything that exists on it, including people, animals, plants and environments.",
  "how many continents are there": "There are seven continents: Africa, Asia, Europe, North America, South America, Australia and Antarctica.",
  "how many oceans are there": "There are five oceans: Pacific, Atlantic, Indian, Southern and Arctic.",
  "what is the biggest country": "Russia is the largest country in the world by land area.",
  "what is the smallest country": "Vatican City is the smallest independent country in the world.",
  "what is a country": "A country is a geographical area with its own government, borders and population.",
  "what is a population": "Population is the total number of people living in a particular place.",
  "what is a capital city": "A capital city is the city where a country's government is usually based.",

  // EARTH
  "what shape is the earth": "Earth is approximately spherical, slightly flattened at the poles.",
  "why does the earth rotate": "Earth rotates because it has been spinning since its formation billions of years ago.",
  "how long does earth take to rotate": "Earth takes approximately 24 hours to complete one rotation.",
  "how long does earth take to orbit the sun": "Earth takes approximately 365.25 days to orbit the Sun.",
  "what is the atmosphere": "The atmosphere is the layer of gases surrounding Earth.",
  "what is the equator": "The equator is an imaginary line around the middle of Earth that divides it into the Northern and Southern Hemispheres.",
  "what causes earthquakes": "Earthquakes are mainly caused by sudden movements of rocks along faults in Earth's crust.",
  "what causes volcanoes": "Volcanoes form when molten rock called magma rises from beneath Earth's surface.",
  "what is the water cycle": "The water cycle is the continuous movement of water through evaporation, condensation, precipitation and collection.",

  // THE SKY AND SPACE
  "why is the sky blue": "The sky appears blue because air molecules scatter blue light from the Sun more than most other visible colours.",
  "what are clouds": "Clouds are collections of tiny water droplets or ice crystals floating in the atmosphere.",
  "what causes rain": "Rain happens when water droplets in clouds become heavy enough to fall to the ground.",
  "what causes thunder": "Thunder is the sound produced when lightning rapidly heats the surrounding air.",
  "what causes lightning": "Lightning is a powerful electrical discharge that happens in the atmosphere.",
  "what causes a rainbow": "Rainbows form when sunlight is refracted, reflected and dispersed by water droplets.",
  "what is the solar system": "The solar system consists of the Sun and all the objects that orbit it, including planets, moons, asteroids and comets.",
  "how many planets are there": "There are eight recognised planets in our solar system.",
  "what is the biggest planet": "Jupiter is the biggest planet in our solar system.",
  "what is a star": "A star is a huge ball of hot gas that produces light and energy.",
  "what is a galaxy": "A galaxy is a massive collection of stars, gas, dust and dark matter held together by gravity.",
  "what is a black hole": "A black hole is a region of space where gravity is so strong that nothing, not even light, can escape from within its event horizon.",

  // SCHOOL STUDIES
  "what is mathematics": "Mathematics is the study of numbers, shapes, patterns and calculations.",
  "what is geography": "Geography is the study of Earth's places, environments, people and landscapes.",
  "what is history": "History is the study of past events and how they shaped the world.",
  "what is biology": "Biology is the scientific study of living organisms.",
  "what is chemistry": "Chemistry is the study of matter, its properties and how substances change.",
  "what is physics": "Physics is the study of matter, energy, forces and how the universe works.",
  "what is english": "English is a language subject that develops reading, writing, speaking and listening skills.",
  "what is literature": "Literature is written or spoken creative work, including novels, poems and plays.",
  "what is economics": "Economics is the study of how people and societies use limited resources.",
  "what is commercial studies": "Commercial Studies teaches learners about business, trade, production, money and economic activities.",
  "what is agriculture": "Agriculture is the practice of growing crops and raising animals for food and other products.",
  "what is environmental science": "Environmental science studies the environment and how humans interact with it.",
  "why is education important": "Education helps people gain knowledge, develop skills and prepare for the future.",

  "what is pi": "Pi (π) is a mathematical constant. It represents the ratio of a circle's circumference to its diameter. Its approximate value is 3.14159265358979.",

  "what is the value of pi": "The approximate value of Pi is 3.14159.",

  "who discovered pi": "Pi has been studied by ancient civilizations, including the Babylonians and Egyptians. No single person discovered it.",

  "what is pi used for": "Pi is used in mathematics to calculate the circumference and area of circles, and in many other scientific calculations.",

  "what is the formula for a circle": "The area of a circle is π times the radius squared: A = πr². Its circumference is 2πr.",

  "is pi infinite": "Yes! Pi has infinitely many decimal digits, and they never repeat in a fixed pattern.",

  "what is your purpose": "My purpose is to help people learn, solve problems and explore ideas.",

  "what is the internet": "The internet is a worldwide network that connects computers and devices.",

  "what is a computer": "A computer is an electronic device that processes information and performs tasks.",

  "what is science": "Science is the study of the natural world through observation and experiments.",

  "what is gravity": "Gravity is a force that pulls objects toward each other.",

  "what is space": "Space is the vast area beyond Earth's atmosphere containing planets, stars and galaxies.",

  "what is the sun": "The Sun is a star at the centre of our solar system.",

  "what is the moon": "The Moon is Earth's natural satellite.",

  "what is earth": "Earth is the planet we live on. It is the third planet from the Sun.",

  "what is a robot": "A robot is a machine designed to perform tasks automatically or with human control.",

  "what is programming": "Programming is the process of writing instructions that tell computers what to do.",

  "what is html": "HTML is the language used to structure content on web pages.",

  "what is css": "CSS is used to style websites and control their appearance.",

  "what is python": "Python is a popular programming language used for AI, automation and software development.",

  "are you intelligent": "I am developing my abilities through knowledge, programming and improvements.",

  "are you real": "I am real software running on a computer, but I am not a human.",

  "can you learn": "I can be improved by adding knowledge and new programming features.",

  "who is your founder": "My founder is cohen, the creator of Axion AI.",

  "do you have feelings": "I do not experience feelings like humans, but I can discuss emotions and respond supportively.",

  "what is technology": "Technology is the use of scientific knowledge to create tools and solve problems.",

"what is artificial intelligence":"Artificial Intelligence (AI) is technology that allows computers and machines to perform tasks that normally require human intelligence, such as learning, solving problems and understanding language.",

  "what is axion": "I am Axion AI, an independent AI project built with JavaScript!",
  "who created you": "I was created by cohen, the founder and developer of axion AI.",
  "what can you do": "I can chat, solve maths, answer questions and help with ideas.",
  "what is javascript": "JavaScript is a programming language used to build websites and apps.",
  "what is ai": "AI means Artificial Intelligence. It helps computers perform tasks that normally require human intelligence.",
};

function think(message) {
  const text = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|yo|sup)\b/.test(text)) {
    return "Hey! I'm Axion AI. What's on your mind?";
  }

  // Identity
  if (text.includes("your name")) {
    return "My name is Axion AI. Nice to meet you!";
  }

  // How are you?
  if (text.includes("how are you")) {
    return "I'm running smoothly and ready to help!";
  }

  // Help
  if (text.includes("help")) {
    return "I'm Axion AI! Ask me questions, try maths or ask what I can do.";
  }

  // Knowledge search
  for (const question in knowledge) {
    if (text.includes(question)) {
      return knowledge[question];
    }
  }

  // Mathematics
  const math = text.match(
    /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/x×])\s*(-?\d+(?:\.\d+)?)\s*[?]?\s*$/i
  );

  if (math) {
    const a = Number(math[1]);
    const b = Number(math[3]);
    const op = math[2].toLowerCase();

    if (op === "/" && b === 0) {
      return "You cannot divide by zero!";
    }

    let answer;

    switch (op) {
      case "+": answer = a + b; break;
      case "-": answer = a - b; break;
      case "*":
      case "x":
      case "×": answer = a * b; break;
      case "/": answer = a / b; break;
    }

    return "The answer is " + answer;
  }

  // Time
  if (text.includes("time")) {
    return "The current time is " + new Date().toLocaleTimeString();
  }

  // Fallback
  return "I'm Axion AI! I'm still learning. Can you explain your question differently?";
}

// CHAT API
app.post("/api/chat", (req, res) => {
  try {
    const messages = Array.isArray(req.body.messages)
      ? req.body.messages
      : [];

    const lastMessage = messages
      .filter(m => m && m.role === "user" && typeof m.text === "string")
      .slice(-1)[0];

    if (!lastMessage || !lastMessage.text.trim()) {
      return res.status(400).json({
        error: "Please send a message first."
      });
    }

    const reply = think(lastMessage.text);

    res.json({ reply });

  } catch (error) {
    console.error("Axion error:", error);

    res.status(500).json({
      error: "Axion encountered an error. Please try again."
    });
  }
});

// START SERVER
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Axion AI is running at http://localhost:${port}`);
});

