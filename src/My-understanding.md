## My Understanding

## 1. แบ่งหน้า Component
แยกโค้ดออกเป็นหลายๆ ไฟล์ (Components) จะได้ไม่อัดแน่นในหน้าเดียว อ่านง่าย แก้ง่าย เผื่ออาจจะเพิ่มอะไรอีกได้ง่าย:
- App.jsx: สำหรับทำ router เอาไว้กำหนด path ให้กับแต่ละ element
- Owner.jsx: ข้อมูลของเจ้าของเว็บ
- Home.jsx: เก็บข้อมูลหลักทั้งหมด คอยยิง API ดึงข้อมูล คอยสั่งลบ และส่งข้อมูลไปให้ไฟล์อื่นใช้งาน
- Navbar.jsx: แถบ header ให้กดเปลี่ยนหน้า (Home / Owner)
- Layout.jsx: Home และ Owner มาใส่โดยใช้ Outlet จาก react-router-dom

## 2. ตัวแปรเก็บข้อมูล State Variables
- ตัวแปร header สำหรับตรวจจับการ click ที่ button หาก header เปลี่ยน หน้า ui ก็จะเปลี่ยนไปตาม header
- ตัวแปร member ใช้สำหรับตั้งค่า data ที่ได้จากการ fetch api แล้วนำ member ไป map ในตารางข้อมูลเพื่อแสดง data ทั้งหมด
- ตัวแปร postMember ใช้สำหรับส่ง data ที่ใส่ลงไปใน input ตรงส่วน create member ไปให้ api

## 3. วิธีการส่งและจัดการข้อมูล State Management
- เนื่องจากทุกอย่างถูก render อยู่ในหน้า Home ทั้งหมด จึงไม่ได้ส่ง props หรือ context ข้าม components

## 4. ทำไมถึงใช้ useEffect
- ใช้ useEffect ตอน fetch api สำหรับดึงข้อมูลมาแสดงทันทีเมื่อหน้าเว็บโหลดเสร็จหนึ่งครั้งโดยการใส่ [] ไว้ใน useEffect

## 5. ใช้ fetch() โดยไม่ผ่าน useEffect
- ได้ใช้ผ่านการ fetch ด้วย method POST, DELETE เมื่อกดปุ่ม SAVE และ Delete ในตาราง

## 6. ใช้ fetch() แบบ Asynchronous (async/await)
- ควรเป็น asynchronous มากกว่า เพราะทุกครั้งที่อยากนำ data มาแสดงในหน้าเว็บ เราไม่ควรให้ data ถูก fetch ตามลำดับข้อมูลแบบ synchronous เพราะจะใช้เวลานาน กว่า data แต่ละตัวจะแสดงขึ้นมาทั้งหมด

## 7. ฟังก์ชันจัดการอินพุตฟอร์ม (Form Input Change Handler)
- ฟังก์ชัน handleInputChange ดึง name และ value จาก e.target แล้วอัปเดตลง State ด้วย Dynamic Key [name]: value
- ทำให้เขียน Handler ฟังก์ชันเดียวรองรับอินพุตได้ทุกช่องในฟอร์ม และทำให้ฟอร์มเป็น Controlled Component ที่ State และ UI ซิงก์ตรงกันเสมอ