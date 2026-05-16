# Checklist de QA — Landing Page

Use antes de cada deploy para produção.

## Conteúdo
- [ ] Copy revisado por humano (sem typos, sem placeholders sobrando)
- [ ] CTAs apontando para o link/ação correta
- [ ] Telefones, e-mails e WhatsApp clicáveis e corretos
- [ ] Logos e imagens do cliente em alta resolução

## Visual / UX
- [ ] Layout idêntico ao design aprovado em mobile, tablet e desktop
- [ ] Tipografia carregando corretamente (sem FOUT/FOIT gritante)
- [ ] Cores batendo com o design system
- [ ] Animações suaves, sem janks

## Performance
- [ ] Lighthouse mobile > 90 (Performance, Acessibilidade, Best Practices, SEO)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Imagens otimizadas (WebP/AVIF, dimensões corretas)
- [ ] Fontes com `font-display: swap` ou subset

## SEO
- [ ] `<title>` e `<meta description>` preenchidos
- [ ] Open Graph (og:title, og:description, og:image) configurado
- [ ] favicon + apple-touch-icon
- [ ] `robots.txt` e `sitemap.xml`
- [ ] URLs canônicas

## Acessibilidade
- [ ] HTML semântico (header, main, section, footer)
- [ ] Contraste mínimo AA
- [ ] Imagens com `alt`
- [ ] Inputs com `label`
- [ ] Navegável por teclado

## Tracking / Integrações
- [ ] GA4 / Plausible disparando pageview
- [ ] GTM publicado (se aplicável)
- [ ] Pixel(s) instalados e disparando
- [ ] Formulário enviando para CRM/webhook correto
- [ ] Evento de conversão validado

## Legal
- [ ] LGPD: banner de cookies (se aplicável)
- [ ] Política de Privacidade linkada no footer
- [ ] Termos de uso (se aplicável)
