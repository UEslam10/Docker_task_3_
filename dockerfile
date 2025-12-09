# 1- استخدام نسخة Node مناسبة
FROM node:18

# 2- تحديد فولدر الشغل جوه الكونتينر
WORKDIR /app

# 3- نسخ package.json + package-lock.json فقط
COPY package*.json ./

# 4- install dependencies
RUN npm install

# 5- نسخ بقية المشروع
COPY . .

# 6- الأمر اللي يشغل السيرفر
CMD ["npm", "run", "dev"]

# 7- عرض البورت اللي المشروع بيشتغل عليه
EXPOSE 3000