import { darDatos,getTareas,deleteData,actualizarTarea } from "./MetodosFetch";
test("Obtener tareas", async () => {
    let data = await getTareas();
    expect(data).not.toBe(null);
  });
  
  test("Crear nueva tarea", async () => {
    let nuevaTarea = {
      titulo: "Tarea de prueba",
      estado: true,
    }
    const data = await darDatos(nuevaTarea);
    expect(data.at(-1)).toMatchObject(nuevaTarea);
  });
  
  test("Actualizar estado de nueva tarea", async () => {
    let nuevaTarea = {
      titulo: "Tarea de prueba",
      estado: false,
    }
    const data = await actualizarTarea(nuevaTarea);
    let tarea = data.at(-1);
    tarea.estado = !tarea.estado;
    const respuesta = await actualizarTarea(tarea);
    expect(respuesta.estado).toBe(true);
  });
  
  test("Eliminar nueva tarea", async () => {
    let nuevaTarea = {
      titulo: "Tarea de prueba",
      estado: false,
    }
    const data = await actualizarTarea(nuevaTarea); //creamos nuevo obj
    let tarea = data.at(-1); //guardamos el objeto recien creado\
    const respuesta = await deleteData(tarea.id); //eliminamos el objeto creado
    const listaTareas = await getTareas(); //extraemos la lista de tareas de nuevo
    expect(listaTareas.at(-1).id).not.toBe(tarea.id); //comparar el ultimo id de la lista actualizada con el id de la tarea creada, si no son iguales, el test está correcto
  });