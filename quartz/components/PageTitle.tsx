import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class="page-title-wrapper">
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
      <img src={`${baseDir}/static/SiteLogoFTrans.png`} alt="Site Logo" class="site-logo" />
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.page-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.site-logo {
  max-width: 100%;
  height: auto;
}

/* Add media query for mobile devices */
@media (max-width: 800px) {
  .site-logo {
    max-width: 300px;  /* Limit width on mobile */
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
