// import mongoose from "mongoose"

// const dbConnect = async () => {
//     await mongoose.connect("mongodb://localhost:27017/lmsdatabase")
// }

// export default dbConnect

import mongoose from "mongoose"

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGO_URI)
}

export default dbConnect