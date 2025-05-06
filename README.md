# spacy-ner-tutorial
Beginner friendly tutorial for spaCy Named Entity Recognition (NER). Please follow the instructions below on how to create an NER.

## 🧠 1. Introduction to Named Entity Recognition
Named Entity Recognition (NER) is a process in Natural Language Processing (NLP) where we identify and classify
named entities in text into categories such as persons, organizations, locations, dates, etc.


## 🧰 2. Install and Import Dependencies
import spacy
from spacy import displacy


## 📥 3. Load a Pre-trained spaCy Model
nlp = spacy.load("en_core_web_sm")


## 📝 4. Input Sample Text
doc = nlp("Apple is looking at buying a U.K. startup for $1 billion. Elon Musk founded SpaceX in 2002.")


## 🔍 5. Named Entities Recognition Results
for ent in doc.ents:
    print(f"{ent.text:30} -> {ent.label_} ({spacy.explain(ent.label_)})")
    

## 👁️ 6. Visualize the Named Entities
displacy.render(doc, style="ent", jupyter=True)


## 🛠️ 7. Customize NER: Add New Entity Labels
# This part would typically involve training, but here’s how you can add patterns for specific matches
from spacy.pipeline import EntityRuler

ruler = nlp.add_pipe("entity_ruler", before="ner")
ruler.add_patterns([
    {"label": "FOUNDER", "pattern": "Elon Musk"},
    {"label": "COMPANY", "pattern": "SpaceX"},
])

custom_doc = nlp("Elon Musk is the founder of SpaceX and Tesla.")
displacy.render(custom_doc, style="ent", jupyter=True)


## 💡 8. Practical Use Case: Extracting Company Names
example_text = "Google, Microsoft, and OpenAI are leading companies in AI research."
doc = nlp(example_text)

companies = [ent.text for ent in doc.ents if ent.label_ == "ORG"]
print("Extracted Companies:", companies)


## 📘 9. Conclusion
spaCy makes it easy to get started with NER, and you can extend it with rule-based or statistical models.
For production-grade customization, consider training spaCy models with your own labeled data.

