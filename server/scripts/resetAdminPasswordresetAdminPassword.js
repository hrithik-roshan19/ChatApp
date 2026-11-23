import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import { User } from '../models/User.js';
import { ROLES } from '../utils/constants.js';

const run = async () => {
  await connectDB();

  try {
    const admin = await User.findOne({ role: ROLES.ADMIN });

    if (!admin) {
      throw new Error('Admin account not found');
    }

    admin.email = 'admin@gmail.com';
    admin.password = 'Admin@19#';

    await admin.save();

    console.log('[reset] Admin credentials updated successfully');
    console.log('[reset] Email:', admin.email);
  } finally {
    await mongoose.disconnect();
  }
};

run().catch((err) => {
  console.error('[reset] Failed:', err.message);
  process.exit(1);
});