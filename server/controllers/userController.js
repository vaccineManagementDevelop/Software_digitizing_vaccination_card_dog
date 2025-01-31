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



