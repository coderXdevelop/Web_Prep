const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'College';
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// 1. CREATE (Insert operation)
async function insertStudent(student) {
  const db = client.db(dbName);

  try {
    const result = await db.collection('student').insertOne(student);
    console.log(`Student with id ${result.insertedId} inserted successfully`);
  } catch (err) {
    console.error('Error inserting student:', err);
  }
}

// 2. READ (Find all students)
async function findAllStudents() {
  const db = client.db(dbName);

  try {
    const students = await db.collection('student').find({}).toArray();
    console.log('All students:', students);
  } catch (err) {
    console.error('Error finding students:', err);
  }
}

// 3. UPDATE (Update operation)
async function updateStudent() {
  const db = client.db(dbName);

  try {
    const result = await db.collection('student').updateOne(
      { _id: new ObjectId('69feb43b2541fb5daaabc117') },
      { $set: { Dept: "CSE" } }
    );

    console.log('Student data updated successfully');
  } catch (err) {
    console.error('Error updating student:', err);
  }
}

// 4. DELETE (Delete operation)
async function deleteStudent(Id) {
  const db = client.db(dbName);

  try {
    const result = await db.collection('student').deleteOne(
      { _id: new ObjectId(Id) }
    );

    console.log(`Student with id ${Id} deleted successfully`);
  } catch (err) {
    console.error('Error deleting student:', err);
  }
}

// Sequential execution flow
connectDB().then(async () => {
  const exampleStudent = {
    name: 'Monisha',
    age: 18,
    cgpa: 6.38,
    Dept: "CSE"
  };

  await insertStudent(exampleStudent);
  await findAllStudents();
  await updateStudent();

  const studentIdToDelete = '6a009d3c68fd89136bfe0796';
  await deleteStudent(studentIdToDelete);

  client.close();
});