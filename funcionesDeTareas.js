const fs = require("fs");
const tareasJSON = fs.readFileSync("./tareas.json", "utf-8");

module.exports = {
  tareas: JSON.parse(tareasJSON),
  listar: function () {
    this.tareas.forEach((tarea, index) => {
      console.log(`${index + 1} - ${tarea.titulo} - ${tarea.estado}`);
      return null;
    });
  },

  escribirJSON: function (info) {
    const jsonInfo = JSON.stringify(info);
    fs.writeFileSync("./tareas.json", jsonInfo);
  },

  guardarTarea: function (tarea) {
    const tareasActuales = this.tareas;
    tareasActuales.push(tarea);
    this.escribirJSON(tareasActuales);
  },
  filtrarPorEstado: function (estado) {
    const tareasActuales = this.tareas;
    const tareasFiltradas = tareasActuales.filter(
      (tarea) => tarea.estado === estado
    );
    console.log(tareasFiltradas);
    return tareasFiltradas;
  },
};
