// Initialize Matter.js
const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

const engine = Engine.create();
const world = engine.world;

// Create renderer
const render = Render.create({
  element: document.body,
  canvas: document.getElementById('gameCanvas'),
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Add ground
const ground = Bodies.rectangle(400, 590, 810, 60, { isStatic: true });
World.add(world, ground);

// Add draggable objects
const box = Bodies.rectangle(200, 200, 50, 50);
const wheel = Bodies.circle(300, 200, 25);

World.add(world, [box, wheel]);

// Add mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
});

World.add(world, mouseConstraint);
render.mouse = mouse;
