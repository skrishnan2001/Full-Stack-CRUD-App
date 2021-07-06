FROM python:3.8.10-slim
ENV PYTHONBUFFERED=1

WORKDIR /code
 
COPY requirements.txt .
 
RUN pip install -r requirements.txt
 
COPY . .
 
RUN chmod +x startup.sh
 
CMD ["./startup.sh"]