Mathematical derivation of the [[Marginal flow lemma]] from the [[Ao Decomposition]] and the [[Markov Blanket Condition]]. 
***
$$ fe(x) = \mathbb{E}_p(e|b)  [f_e(x)] = (\Gamma_{e,e}- Q_{e,e})\nabla_e \ln p^*(e) − Q_{e,b}\nabla_b p(e,b) $$

using the marginal flow lemma, while $\alpha = (a, i)$: 

$$ f_\alpha(x) = (\Gamma \alpha\alpha − Q_{\alpha\alpha})\nabla_\alpha \ln p^*(i, s, a) $$

series of mathematical ‘inflationary devices’ (adding and subtracting the same quantity,so the total is 0, in order to introduce it to the equation) to express this surprisal in terms of its interaction with the external states beyond the blanket.

$$ − \ln p^*(i, s, a) = E_{p^*(e|i,s,a)}  [ − \ln p^*(i, s, a)]$$
$$ = E_{p^*(e|i,s,a)}  [ \ln p^*(e|i, s, a) − \ln p^*(e, i, s, a)]$$
$$ = E_{p^*(e|i,s,a)}  [ \ln p^*(e|i, s, a) − \ln p^*(i,s,a|e) - \ln p^*(e)]$$
$$ = \underbrace{E_{p^*(e|i,s,a)}  [ -\ln p^*(i,s,a|e)]}_{\text{Inaccuracy}} + \underbrace{D_{KL}[p*(e|i,s,a)\|p(e)]}_{\text{Complexity}}$$
***
### Evidence
##### Supporting

| Handle               | Title                                                                  | Summary of relevant evidence | Link                                 |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------- | ------------------------------------ |
| Friston 2019         | A Free Energy Principle for a Particular Physics                       |                              | [](https://arxiv.org/abs/1906.10184) |
| Millidge et al. 2021 | A Mathematical Walkthrough and Discussion of the Free Energy Principle | p. 10                        | [](http://arxiv.org/abs/2108.13343)  |
##### Counter
| Handle | Title | Summary of relevant evidence | Link |
| ------ | ----- | ---------------------------- | ---- |
|        |       |                              |      |

***
### Connections
Derrivation on the [[Ao Decomposition]] after addition of the [[Markov Blanket Condition]]
***
##### Metadata
***
#Sentence

#TaS 

#Derivation 