[[Variational Free Energy|Variational Inference]] trace a upper bound on the, mostly untraceable, [[Free Energy|Free Energy]].
***
$$\mathcal{F}(D, \theta) = \mathbb{E}_{q(H|D)}[\ln q(H|D;\theta]-\ln p(H|D)]
$$
$$ = D_{KL}[q(H|D;\theta)\|p(H|D)]- \ln p(D)$$
$$ \geq D_{KL}[q(H|D;\theta)\|p(H|D)] $$
commonly written as:
$$ F[Q, y] = \underbrace{D_{KL}[Q(x)\|P(x|y)]}_{Divergence}-\underbrace{\ln P(y)}_{Evidence} $$
***
### Evidence
##### Supporting

| Handle                      | Title                                                                  | Summary of relevant evidence | Link                                                                                                 |
| --------------------------- | ---------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| Millidge et al. 2021        | A Mathematical Walkthrough and Discussion of the Free Energy Principle | p. 11                        | [](http://arxiv.org/abs/2108.13343)                                                                  |
| Parr, Pezzulo, Friston 2022 | Active Inference Textbook configuration.                               | p. 28 & 30                   | [](https://direct.mit.edu/books/oa-monograph/5299/Active-InferenceThe-Free-Energy-Principle-in-Mind) |
##### Counter
| Handle | Title | Summary of relevant evidence | Link |
| ------ | ----- | ---------------------------- | ---- |
|        |       |                              |      |

***
### Connections
Used to approximate [[content/Sentences/Self-evidencing|Self-evidencing]]
Used to trace and minimize the Variational Free Energy [[The Free-Energy Principle]]

Can be recomposed to [[]]
and [[]]
***
##### Metadata
***
#Sentence

- [ ] WiP