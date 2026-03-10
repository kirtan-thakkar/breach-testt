import numpy as np
import os
from langchain_community.document_loaders import PyPDFLoader
from dotenv import load_dotenv
load_dotenv()
os.environ["Groq_API_Key"] = os.getenv("GROQ_API_KEY")
# print(os.environ["Groq_API_Key"])
loader = PyPDFLoader("lang.pdf")
doc = loader.load()