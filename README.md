# spacy-ner-tutorial
Beginner friendly tutorial for spaCy Named Entity Recognition (NER). Please follow the instructions below on how to create an NER.

## 🧠 Introduction to Named Entity Recognition 🧠 
Named Entity Recognition (NER) is a process in Natural Language Processing (NLP) where we identify and classify
named entities in text into categories such as persons, organizations, locations, dates, etc.


## 🧰 1. Install and Import Dependencies
This step ensures you have the necessary tools to work with spaCy. You import the spaCy library itself and displacy, 
which is a built-in visualization tool used to display named entities in text.

## 📥 2. Load a Pre-trained spaCy Model
spaCy provides pre-trained language models that already understand grammar, entities, and more. Here, you're loading the English
model en_core_web_sm so you can process English text and extract named entities right away.

## 📝 3. Input Sample Text
You pass a sample sentence into the model, which processes the text and analyzes it for linguistic features. 
The result is stored in a doc object that contains all the tokens, parts of speech, and named entities.

## 🔍 4. Named Entities Recognition Results
This loop goes through all the named entities spaCy found in the text and prints each one along with its label (like PERSON or ORG). 
It also uses spacy.explain() to give a human-readable explanation of each label.
    
## 👁️ 5. Visualize the Named Entities
Using spaCy’s displacy.render, this step creates a colorful, interactive visualization of the named entities directly in your notebook. 
It helps you clearly see which words spaCy has labeled and how.


## 🛠️ 6. Customize NER: Add New Entity Labels
You can extend spaCy’s default NER by using an EntityRuler, which lets you define custom patterns (like "Elon Musk" as a FOUNDER). 
This is helpful when spaCy’s built-in model doesn’t recognize specific terms important to your use case.

##  7. Practical Use Case: Extracting Company Names
This example shows how you can filter the recognized entities to focus on specific types—like companies (ORG). 
It demonstrates a practical application, such as pulling organization names from news articles.

## 📘 8. Conclusion
spaCy’s tools make it easy to get started with named entity recognition, even with no prior NLP experience. A
s you grow more confident, you can build more advanced models by training spaCy on your own data.





