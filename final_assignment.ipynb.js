# 📘 Final Assignment - spaCy NER Tutorial

# 🧠 Instructions:
# - Use this notebook to run the final assignment "spaCy NER Tutorial."
# - Follow the template below or modify as needed.
# - Be sure to read through the instructions and explanations README.md file. 

# 1. Import Dependencies
import spacy
from spacy import displacy

# 2. Load spaCy Model (this is a pre-trained spaCy Model)
nlp = spacy.load("en_core_web_sm")  # You can change the model if needed

# 3. Sample Text in quotes below, feel free to change or modify to see the changes in the output below
doc = nlp("Apple is looking at buying a U.K. startup for $1 billion. Elon Musk founded SpaceX in 2002.")

# 4. Print Named Entities are the recognition results
for ent in doc.ents:
    print(f"{ent.text:25} -> {ent.label_} ({spacy.explain(ent.label_)})")

# 5. Visualize the Named Entities
displacy.render(doc, style="ent", jupyter=True)

# 🛠️ 6. Customize NER: Add New Entity Labels
# This part would typically involve training, but here’s how you can add patterns for specific matches
from spacy.pipeline import EntityRuler

ruler = nlp.add_pipe("entity_ruler", before="ner")
ruler.add_patterns([
    {"label": "FOUNDER", "pattern": "Elon Musk"},
    {"label": "COMPANY", "pattern": "SpaceX"},
])

custom_doc = nlp("Elon Musk is the founder of SpaceX and Tesla.")
displacy.render(custom_doc, style="ent", jupyter=True)

# 💡 7. Practical Use Case: Extracting Company Names
example_text = "Google, Microsoft, and OpenAI are leading companies in AI research."
doc = nlp(example_text)

companies = [ent.text for ent in doc.ents if ent.label_ == "ORG"]
print("Extracted Companies:", companies)

# 📘 8. Conclusion
# spaCy makes it easy to get started with NER, and you can extend it with rule-based or statistical models.
# For production-grade customization, consider training spaCy models with your own labeled data.

