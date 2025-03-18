The Flow of the system states ([[Internal State|i]],[[Sense State|s]],[[Active States|a]]) aims to maximize the likelihood of the interal states given the external states. It performs a maximum likelihood inference on themselves ([[Terms/Self-evidencing|Self-evidencing]]) - while simultaneously minimizing the complexity - the divergence between the external states given the internal states, and the 'prior' distribution over the external states ([[Inference]]).
***
$$ = \underbrace{E_{p^*(e|i,s,a)}  [ -\ln p^*(i,s,a|e)]}_{\text{Inaccuracy}} + \underbrace{D_{KL}[p*(e|i,s,a)\|p(e)]}_{\text{Complexity}}$$
can be changed; is usally presented as: 
$$ F[Q,y] = \underbrace{D_{KL}[Q(x)\|P(x)]}_{\text{Complexity}}-\underbrace{\mathbb{E}_{Q(x)[\ln P(y|x)]}}_{\text{Accuracy}}
$$
***
### Evidence
##### Supporting

| Handle               | Title                                                                  | Summary of relevant evidence | Link                                |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------- | ----------------------------------- |
| Millidge et al. 2021 | A Mathematical Walkthrough and Discussion of the Free Energy Principle | p. 9                         | [](http://arxiv.org/abs/2108.13343) |
##### Counter
| Handle | Title | Summary of relevant evidence | Link |
| ------ | ----- | ---------------------------- | ---- |
|        |       |                              |      |

***
### Connections
Derivated by [[Marginal flow lemma derivation]]
[[Self-evidencing is existing]]

Is tracked by [[Variational Inference]]
***
##### Metadata
***
#Sentence

#Derivation 