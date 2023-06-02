import "@testing-library/jest-dom";
// Mocks for Next.js router
export function mock_router() {
  return {
    useSelectedLayoutSegment() {
      return {
        push: mockSignOut,
      };
    },
    useSelectedLayoutSegments() {
      return {
        push: mockSignOut,
      };
    },
  };
}
