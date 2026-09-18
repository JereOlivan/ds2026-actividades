# 📚 Desarrollo de Software - Repositorio de Clases

¡Bienvenidos al repositorio oficial de la materia de Desarrollo de Software! 🚀

Este espacio está diseñado para acompañarlos clase a clase en la construcción del proyecto individual. A lo largo del cuatrimestre, iremos desarrollando una aplicación completa paso a paso, integrando los conceptos teóricos y prácticos vistos en cada encuentro.

---

## 🛠️ Metodología de Trabajo: "Una Rama por Clase"

Para que puedan seguir la evolución del código sin perderse, este repositorio utiliza un enfoque basado en **ramas (branches)**. 

En lugar de tener todo el código mezclado o sobrescrito en la rama `main`, hemos separado el progreso para que coincida exactamente con lo visto en cada clase. Así es como funciona:

* **`main`**: Contiene la estructura base del proyecto o la versión final (dependiendo del momento de la cursada).
* **`C01`, `C02`, `C03`, etc.**: Cada una de estas ramas contiene el estado exacto del código al finalizar esa clase específica y la de la anterior clase.

```text
main:      (Estructura base) ──> *
                                  \
clase-01:                          * ──> * (Fin Clase 1: Configuración inicial)
                                          \
clase-02:                                  * ──> * (Fin Clase 2: Conexión a Base de Datos)
                                                  \
clase-03:                                          * ──> * (Fin Clase 3: Primeros endpoints)
                                                          \
clase-04:                                                  * ──> ... y así sucesivamente
```
---

## 📖 Guía Paso a Paso: ¿Cómo seguir las clases?

Flujo de trabajo:

### 1. Descargar el proyecto (Solo la primera vez)

```bash
git clone url-del-repo
cd nombre-del-repo
```

### 2. Ver qué clases están disponibles
Para listar todas las clases ya subidas al repo, podés usar este comando:

```bash
git branch -a
```
Nota: Las ramas que aparecen en rojo o que dicen remotes/origin/clase-X son las que están subidas a GitHub. Las que están en verde o blanco son las que ya tenés activas en tu compu.

### 3. Viajar al código de una clase específica
Supongamos que hoy es la Clase 3 y querés ver el código exacto que se hizo ese día. Para "cambiarte" a esa rama, ejecutá:

```bash
git switch C03
```

#### 4. Actualizar el repositorio (Todas las semanas)
Semana a semana se van a ir subiendo nuevas clases. Tu computadora no descarga estos cambios automáticamente.

Antes de arrancar una nueva clase, asegurate de traer las novedades desde GitHub. Primero volvé a la rama principal, y después pedile a Git que descargue lo nuevo:

```bash
git switch main
git pull
```
Una vez hecho el pull, ya podés repetir el Paso 3 para moverte a la nueva clase (por ejemplo, git switch clase-04).
