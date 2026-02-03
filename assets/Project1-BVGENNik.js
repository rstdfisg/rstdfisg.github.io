import{E as e,P as t,j as n,t as r}from"./index-BXcYjUx2.js";import{t as i}from"./MarkdownReader-hmLVSb-F.js";n();var a=`# Vortex Formation in Rotating Bose-Einstein Condensates

![Vortex Formation](vortex.webp)

A GPU-accelerated numerical simulation solver for studying quantized vortex dynamics in rotating ultracold quantum gases.

## About

When a **Bose-Einstein condensate** is confined in a rotating trap and cooled near absolute zero, it develops remarkable quantum structures called **quantized vortices**. These microscopic whirlpools arrange themselves into beautiful triangular lattice patterns, similar to those found in neutron stars and superconductors.

This project provides a sophisticated simulation tool for studying vortex formation by solving the **Gross-Pitaevskii equation (GPE)** with realistic energy dissipation. The simulation is particularly challenging because:

- **Nonlinear Schrödinger Equation** (NLSE)
- **Energy loss** must be carefully modeled through phenomenological damping
- **Numerical errors** can grow rapidly without proper treatment
- The rotating reference frame introduces **complex coordinate coupling**
- Long-time evolution requires **precise energy conservation**

## Mathematical Foundation

### The Dissipative Gross-Pitaevskii Equation

The dynamics is governed by the dissipative GPE in a rotating frame:

$$
(i - \\gamma)\\frac{\\partial \\psi}{\\partial t} = \\left[-\\frac{1}{2}\\nabla^2 + V(\\mathbf{r}) + g|\\psi|^2 - \\Omega L_z\\right]\\psi
$$

Where:
- $\\psi(\\mathbf{r}, t)$ is the macroscopic wave function
- $V(\\mathbf{r}) = \\frac{1}{2}(\\omega_x^2 x^2 + \\omega_y^2 y^2)$ is the anisotropic trap
- $g$ is the interaction strength
- $\\gamma$ is the **dissipation parameter** controlling energy loss
- $\\Omega$ is the rotation frequency

The complex prefactor $(i - \\gamma)$ introduces controlled energy damping, allowing the system to relax toward equilibrium.

## Numerical Methods

### Time-Split Fourier Spectral Method

We employ a **second-order accurate** split-step scheme that separates kinetic and potential evolution:

$$
\\psi(t+\\Delta t) \\approx e^{\\hat{K}\\Delta t/(2(i-\\gamma))} e^{\\hat{V}\\Delta t/(i-\\gamma)} e^{\\hat{K}\\Delta t/(2(i-\\gamma))} \\psi(t)
$$

This symmetric **Strang splitting** maintains excellent stability and energy conservation even over thousands of timesteps.

## Handling Energy Dissipation

### The Critical Challenge

The dissipation parameter $\\gamma$ creates a **complex prefactor** that must be handled carefully. Poor implementation leads to:

1. Numerical instability and error amplification
2. Non-physical normalization decay rates
3. Incorrect energy loss dynamics

### Our Solution

We include $\\gamma$ **inside the complex denominator** of all propagators:

$$
\\hat{U}_x = \\exp\\left[\\frac{\\Delta t}{4(i-\\gamma)}\\left(k_x^2 + 2\\Omega y k_x\\right)\\right]
$$

$$
\\hat{U}_y = \\exp\\left[\\frac{\\Delta t}{4(i-\\gamma)}\\left(k_y^2 - 2\\Omega x k_y\\right)\\right]
$$

This ensures the dissipation affects kinetic and potential evolution **consistently**, maintaining physical energy loss rates while preserving numerical stability.

The nonlinear term is treated similarly:

$$
\\hat{V} = \\exp\\left[\\frac{\\Delta t}{i-\\gamma}\\left(V(\\mathbf{r}) + g|\\psi|^2\\right)\\right]
$$

## GPU Implementation

### CuPy Acceleration

Large-scale simulations require significant computational power. Our **GPU-accelerated version** uses CuPy for:

- Fast Fourier Transforms (performed 4 times per timestep)
- Element-wise array operations on the wave function
- Parallel computation achieving **10-100× speedup**

### Core Update Loop

\`\`\`python
import cupy as cp

class DissipationModel_GPU:

    def _init_approximation_wavefunction(self) -> None:
        """
        Initial approximation wavefunction for stable initial state.
        """

    def load_psi(self, psi):
        """
        Load any state of wavefunction
        """

    def create_H_operator(self):
        """
        Hamitonian operator for different direction
        """

    def update(self, t_start, t_end, dt=1e-3):
        """
        Main core update loop
        """
\`\`\`

The key insight is treating the dissipation **inside the complex denominator** \`1/(1j-r)\` rather than as a separate factor. This ensures:

- Consistent energy loss across all terms
- Numerical stability for small $\\gamma$
- Physically meaningful dissipation rates

### Package

\`\`\`python
# Numerical computation
numpy>=1.20.0
scipy>=1.7.0

# GPU acceleration (10-100× speedup)
cupy-cuda11x>=10.0.0

# Visualization
matplotlib>=3.4.0
\`\`\`

## files

- **SteadyStateModel.py** — Ground state solver via gradient descent
- **TimeEvolutionModel.py** — CPU-based dynamics solver
- **TimeEvolutionModel_gpu.py** — GPU-accelerated version ⚡
- **main.py** — Simulation interface
- **util.py** — Visualization utilities

## Physical Significance

This solver achieve:

1. Resolves vortex cores at **high spatial resolution**
2. Handles energy dissipation with **controlled numerical error**
3. Maintains **long-term stability** over 10,000+ timesteps
4. Scales efficiently to **GPU hardware** for large grids

## Results

The simulation captures the complete dynamics from initialization to equilibrium:

1. **Initial perturbation** — rotating trap imparts angular momentum
2. **Vortex nucleation** — quantized vortices appear at trap boundaries
3. **Lattice formation** — vortices migrate inward and self-organize
4. **Equilibrium state** — triangular Abrikosov lattice minimizes energy

---

For implementation details and source code, visit the [GitHub repository](https://github.com/rstdfisg/simpleBECModel).
`,o=e();function s(){return(0,o.jsxs)(`div`,{className:`bg-transparent flex flex-col items-center w-full max-w-7xl mx-auto`,children:[(0,o.jsx)(`div`,{className:`h-14 sm:h-48 w-fit invisible`,children:` `}),(0,o.jsx)(r,{subPage:!0}),(0,o.jsx)(`div`,{className:`w-full`,children:(0,o.jsx)(i,{content:a})})]})}var c=s;export{c as default};