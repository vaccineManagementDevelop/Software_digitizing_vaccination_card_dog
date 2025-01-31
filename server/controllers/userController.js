import userModel from '../models/userModel.js'; // Asegúrate de importar correctamente el modelo

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.body; // Asegúrate de que userId se pase correctamente
    const user = await userModel.findById(userId); // Busca el usuario en la base de datos

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

  
    // Si el usuario se encuentra, devuelve los datos
    res.json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified // Devolver el valor calculado aquí
      },
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const sendVerifiOTP = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);

    // Verificar si la cuenta ya está verificada
    if (user.isAccountVerified) {
      return res.json({ success: false, message: "Account Already Verified" });
    }

    // Generar OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;  // Se cambió de sendVerifiOTP a verifyOtp para que sea consistente con la validación en verifiEmail
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // Expira en 24 horas

    // Guardar cambios en la base de datos
    await user.save();

    // Configuración del correo
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: 'Account Verification OTP',
      text: `Your OTP is ${otp}. Verify your account using this OTP.`
    };

    // Enviar el correo
    await transporter.sendMail(mailOption);

    res.json({ success: true, message: "Verification OTP sent to email" });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}