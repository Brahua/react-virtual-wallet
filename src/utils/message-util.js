import Swal from "sweetalert2";

export const MessageUtil = {
  loading: () => {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando",
    });
    Swal.showLoading();
  },

  close: () => {
    Swal.close();
  },

  success: (message) => {
    Swal.fire({
      icon: "success",
      title: "Operación completada",
      text: message,
    });
  },

  error: (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  },

  confirmation: async () => {
    return await Swal.fire({
      title: "Estás seguro?",
      text: "Esta acción es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    });
  },
};
