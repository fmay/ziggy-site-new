let currentStatus = true

/**
 * Toggles the swap status and returns the new value
 * @returns The toggled boolean value
 */
export function getSwapStatus(): boolean {
  currentStatus = !currentStatus
  return currentStatus
}

/**
 * Resets the swap status to the specified value
 * @param status - The value to set (defaults to false if not provided)
 */
export function resetSwapStatus(status?: boolean): void {
  currentStatus = !status
}
