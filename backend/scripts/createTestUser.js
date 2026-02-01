// Script to create a test user account
// Run with: node scripts/createTestUser.js

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

// Test user data
const testUserData = {
  username: 'testuser',
  email: 'test@example.com',
  password: 'test123456',
  age: 25,
  weight: 70,
  height: 175,
  goal: 'general_fitness',
};

async function createTestUser() {
  try {
    // Connect to database
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { email: testUserData.email },
        { username: testUserData.username },
      ],
    });

    if (existingUser) {
      console.log('❌ Test user already exists!');
      console.log('Email:', existingUser.email);
      console.log('Username:', existingUser.username);
      console.log('\nYou can use these credentials to login:');
      console.log('Email: test@example.com');
      console.log('Password: test123456');
      process.exit(0);
    }

    // Create new test user
    const user = await User.create(testUserData);

    console.log('✅ Test user created successfully!');
    console.log('\n📋 Login Credentials:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Email:    test@example.com');
    console.log('Password: test123456');
    console.log('Username: testuser');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n📊 User Details:');
    console.log('Age:', user.age);
    console.log('Weight:', user.weight, 'kg');
    console.log('Height:', user.height, 'cm');
    console.log('Goal:', user.goal);
    console.log('Total Points:', user.totalPoints);
    console.log('Current Level:', user.currentLevel);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating test user:', error.message);
    process.exit(1);
  }
}

// Run the script
createTestUser();



