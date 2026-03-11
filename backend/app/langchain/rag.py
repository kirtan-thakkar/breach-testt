import numpy as np
import os
from langchain_community.document_loaders import PyPDFLoader
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
load_dotenv()
os.environ["Groq_API_Key"] = os.getenv("GROQ_API_KEY")
# print(os.environ["Groq_API_Key"])
file_path = "C:\\tailwind\\backend\\app\\langchain\\lang.pdf"
loader = PyPDFLoader(file_path)
doc = loader.load()
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunk_data = text_splitter.split_documents(doc)
