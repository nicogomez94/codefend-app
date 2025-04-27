# Codefend - Desafío Técnico Frontend

Este repositorio contiene la solución al desafío técnico para el rol de **Desarrollador/a Frontend – React / JS**. El objetivo principal es construir un flujo funcional de creación de usuario y una pantalla de dashboard, alineados al diseño entregado y los requerimientos técnicos.

## 🛠 Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz.
- **TypeScript**: Para tipado estático y mayor robustez en el desarrollo.
- **Zustand**: Manejo de estado global.
- **React Router**: Navegación entre las pantallas.
- **Sass**: Estilización modular y reutilizable.
- **Vite**: Herramienta de desarrollo para un entorno rápido y moderno.

## 🚀 Funcionalidades Implementadas

1. **Flujo de Onboarding**:
   - Creación de un nuevo usuario con validaciones en cada paso.
   - Persistencia del estado del formulario utilizando `Zustand`.
   - Navegación entre pasos con un indicador de progreso.

2. **Pantalla de Dashboard**:
   - Vista populada con datos simulados.
   - Vista sin popular en caso de cerrar el modal de onboarding.
   - Componentes reutilizables para tarjetas de estadísticas, gráficos y tablas.
   - Funcionalidad de Ver Perfil con Modal para ver datos.
   - Funcionalidad de "cerrar sesión", para que se reinicie la prueba.

3. **Manejo de Estados y Errores**:
   - Validaciones en tiempo real en los formularios.
   - Mensajes de error claros y específicos para cada campo.
   - Navegación fluida y manejo de estados globales.

## 📦 Estructura del Proyecto

```plaintext
codefend-test/
├── src/
│   ├── components/       # Componentes reutilizables y específicos
│   │   ├── common/       # Componentes genéricos como botones, inputs y otros elementos reutilizables
│   │   ├── dashboard/    # Componentes específicos para la pantalla de dashboard
│   │   ├── onboarding/   # Componentes relacionados con el flujo de creación de usuario
│   │   ├── onboard/      # Componentes relacionados con el flujo de escaneo y analisis
│   ├── pages/            # Páginas principales (Onboarding, Dashboard)
│   ├── store/            # Manejo de estado global con Zustand
│   ├── styles/           # Estilos globales y específicos (Sass)
│   ├── router/           # Configuración de rutas
│   └── [main.tsx](http://_vscodecontentref_/0)          # Punto de entrada principal
├── public/               # Archivos estáticos
├── [package.json](http://_vscodecontentref_/1)          # Dependencias y scripts
├── [tsconfig.json](http://_vscodecontentref_/2)         # Configuración de TypeScript
└── [vite.config.ts](http://_vscodecontentref_/3)        # Configuración de Vite
```

## 📖 Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio**:

    ```bash
    git clone https://github.com/nicogomez94/codefend-test
    cd codefend-test
    ```

2. **Instalar dependencias**:

    Asegúrate de tener **Node.js** y **npm** o **yarn** instalados en tu sistema.

    ```bash
    npm install
    # o
    yarn install
    ```

3. **Ejecutar el proyecto**:

    Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    # o
    yarn dev
    ```