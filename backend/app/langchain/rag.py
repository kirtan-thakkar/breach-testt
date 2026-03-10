import numpy as np
import os
from langchain_community.document_loaders import PyPDFLoader
from dotenv import load_dotenv
load_dotenv()
os.environ["Groq_API_Key"] = os.getenv("GROQ_API_KEY")
# print(os.environ["Groq_API_Key"])
file_path = "C:\\tailwind\\backend\\app\\langchain\\lang.pdf"
loader = PyPDFLoader(file_path)
doc = loader.load()
print(doc[0])
