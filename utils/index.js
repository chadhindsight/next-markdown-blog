export const sortByDate = (date1, date2) => {
    return new Date(date2.frontmatter.date) - (date1.frontmatter.date)
}