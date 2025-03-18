Self-organizing, self-evidencing systems maintain themselves at a non-equilibrium-steady state, and thereby implicitly performing variational Bayesian inference.
***
$$ \pi, o, s = \text{arg min } F(\tilde{o}, \pi|s) $$
$$F[Q,y] = \underbrace{D_{KL}[Q(x)\|P(x)]}_{\text{Complexity}}-\underbrace{\mathbb{E}_{Q(x)[\ln P(y|x)]}}_{\text{Accuracy}}
$$
Can be also arranged as:
$$ \mathcal{F}(D,\theta) = \underbrace{\mathbb{E}_{q(H|D;\theta)}[\ln p(D|H)]}_{\text{Accuracy}}+\underbrace{D_{KL}[q(H|D;\theta)\|p(H)]}_{\text{Complexity}} $$
***
### Evidence
##### Supporting

| Handle               | Title                                                                  | Summary of relevant evidence | Link                                       |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------- | ------------------------------------------ |
| Millidge et al. 2021 | A Mathematical Walkthrough and Discussion of the Free Energy Principle | p. 11                        | [](http://arxiv.org/abs/2108.13343)        |
| Friston 2010         | The free-energy principle: a unified brain theory?                     |                              | [](http://www.nature.com/articles/nrn2787) |
##### Counter
| Handle | Title | Summary of relevant evidence | Link |
| ------ | ----- | ---------------------------- | ---- |
|        |       |                              |      |

***
### Connections
Can be recomposed to: [[Jaynes's maximum entropy principle]]
Can be recomposed to: [[Occam's Razzor]]

***
##### Metadata
***
#Sentence

#Hinge 