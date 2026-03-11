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

text_splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=20)
chunk_data = text_splitter.split_documents(doc)


prompt = ChatPromptTemplate.from_messages([
    ("system","You are a helpful assistant that answers questions based on the following context:{context}"),
    ("human","{question}")
])

llm = ChatGroq(model="openai/gpt-oss-120b")
chain = prompt | llm

response = chain.invoke({"context":chunk_data,"question":"What is the main topic of the document?"})

print(response.content)