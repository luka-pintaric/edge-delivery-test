export const addChildElement = (parent: HTMLElement, childName: string): HTMLElement => {
    let child: HTMLElement = document.createElement(childName);
    parent.appendChild(child);
    return child;
}