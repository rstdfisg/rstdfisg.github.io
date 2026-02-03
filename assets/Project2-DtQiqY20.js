import{E as e,P as t,j as n,t as r}from"./index-BXcYjUx2.js";import{t as i}from"./MarkdownReader-hmLVSb-F.js";n();var a=`# Soft-Body Physics Simulation

![Project Banner](project2.webp)

An interactive physics simulation that demonstrates soft-body dynamics using Verlet integration. Built with C++ and SFML, it provides real-time visualization of deformable objects responding to physical forces and constraints.

## Implementation Tricks

The edge constraint system uses clever approximations to maintain smooth, real-time performance:

### Single-iteration constraint solving

Instead of iteratively converging to the exact solution (which can be computationally expensive), the algorithm applies corrections in a single pass:

\`\`\`cpp
// Calculate distance between nodes
sf::Vector2f diffvec = pos1 - pos2;
float distance = length(diffvec);

// Calculate correction factor
float diffFactor = (desired_length - distance) / distance;
sf::Vector2f offset = diffvec * diffFactor * 0.5f;
\`\`\`

This approximation trades perfect accuracy for speed, making it ideal for interactive simulations.

### Symmetric relaxation

When updating edge constraints, the correction is split equally between connected nodes using a **0.5 scale factor**:

\`\`\`cpp
if (!node1->pinned && !node2->pinned) {
    // Both nodes free - split correction equally
    node1->pos += offset * 0.5f;
    node2->pos -= offset * 0.5f;
}
\`\`\`

This distributes positional errors symmetrically, preventing oscillations and creating smooth, stable cloth behavior.

### Pinning optimization

The algorithm intelligently handles fixed points:

\`\`\`cpp
if (node1->pinned && node2->pinned) {
    // Both pinned - skip update
    return;
} else if (node1->pinned) {
    // Only node1 pinned - apply full correction to node2
    node2->pos -= offset;
} else if (node2->pinned) {
    // Only node2 pinned - apply full correction to node1
    node1->pos += offset;
} else {
    // Both free - split correction
    node1->pos += offset * 0.5f;
    node2->pos -= offset * 0.5f;
}
\`\`\`

These approximations allow the simulation to handle complex cloth structures with many constraints while maintaining real-time performance, demonstrating how practical physics simulations often prioritize smoothness and interactivity over numerical precision.`,o=e();function s(){return(0,o.jsxs)(`div`,{className:`bg-transparent flex flex-col items-center w-full max-w-7xl mx-auto`,children:[(0,o.jsx)(`div`,{className:`h-14 sm:h-48 w-fit invisible`,children:` `}),(0,o.jsx)(r,{subPage:!0}),(0,o.jsx)(`div`,{className:`w-full`,children:(0,o.jsx)(i,{content:a})})]})}var c=s;export{c as default};