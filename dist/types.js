"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffValidator = exports.guardResourceDiff = exports.nicerStackDiffValidator = exports.nicerStackDiffGuard = exports.nicerDiffGuard = exports.cdkDiffCategories = void 0;
exports.cdkDiffCategories = ['iamChanges', 'securityGroup', 'resources', 'parameters', 'metadata', 'mappings', 'conditions', 'outputs', 'unknown'];
const nicerDiffGuard = (thing) => typeof thing === 'object' &&
    typeof thing.label === 'string' &&
    typeof thing.cdkDiffRaw === 'string' &&
    ['undefined', 'object'].includes(typeof thing.nicerDiff);
exports.nicerDiffGuard = nicerDiffGuard;
const nicerStackDiffGuard = (thing) => {
    if (typeof thing === 'object') {
        if (typeof thing.raw === 'string' && typeof thing.stackName === 'string') {
            if (!!thing.diff) {
                if (thing.diff.filter(exports.nicerDiffGuard).length === thing.diff.length) {
                    return true;
                }
            }
            return true;
        }
    }
    return false;
};
exports.nicerStackDiffGuard = nicerStackDiffGuard;
const nicerStackDiffValidator = (thing) => {
    if (typeof thing === 'object') {
        if (thing.filter(exports.nicerStackDiffGuard).length === thing.length) {
            return thing;
        }
    }
    throw new Error(`input is not a NicerStackDiff[]: ${JSON.stringify(thing, null, 2)}`);
};
exports.nicerStackDiffValidator = nicerStackDiffValidator;
const guardResourceDiff = (thing) => typeof thing === 'object' &&
    typeof thing.forEachDifference === 'function';
exports.guardResourceDiff = guardResourceDiff;
const diffValidator = (thing) => {
    if (typeof thing === 'object') {
        if (thing.length === 2) {
            const [diffCollectionKey, diffCollection] = thing;
            if (!exports.cdkDiffCategories.includes(diffCollectionKey)) {
                throw new Error(`unexpected diff category: ${diffCollectionKey}`);
            }
            if (typeof diffCollection === 'object' && diffCollection.hasOwnProperty('diffs')) {
                return { diffCollectionKey, diffCollection };
            }
        }
    }
    throw new Error(`invalid diff: ${JSON.stringify(thing, null, 2)}`);
};
exports.diffValidator = diffValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR2EsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFVLENBQUM7QUEwQjFKLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBVSxFQUFzQixFQUFFLENBQy9ELE9BQU8sS0FBSyxLQUFLLFFBQVE7SUFDekIsT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVE7SUFDL0IsT0FBTyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVE7SUFDcEMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBSjlDLFFBQUEsY0FBYyxrQkFJZ0M7QUFRcEQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEtBQVUsRUFBMkIsRUFBRTtJQUN6RSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUN4RSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNoQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFjLENBQUMsQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2xFLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7WUFFRCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQWRZLFFBQUEsbUJBQW1CLHVCQWMvQjtBQUVNLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxLQUFVLEVBQW9CLEVBQUU7SUFDdEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLDJCQUFtQixDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDN0QsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RixDQUFDLENBQUE7QUFSWSxRQUFBLHVCQUF1QiwyQkFRbkM7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBVSxFQUF1QyxFQUFFLENBQ25GLE9BQU8sS0FBSyxLQUFLLFFBQVE7SUFDekIsT0FBTyxLQUFLLENBQUMsaUJBQWlCLEtBQUssVUFBVSxDQUFDO0FBRm5DLFFBQUEsaUJBQWlCLHFCQUVrQjtBQUd6QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQVUsRUFBc0gsRUFBRTtJQUM5SixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDbEQsSUFBSSxDQUFDLHlCQUFpQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixpQkFBaUIsRUFBRSxDQUFDLENBQUM7YUFDbkU7WUFFRCxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLENBQUM7YUFDOUM7U0FDRjtLQUNGO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUE7QUFmWSxRQUFBLGFBQWEsaUJBZXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2ZuRGlmZiBmcm9tICdAYXdzLWNkay9jbG91ZGZvcm1hdGlvbi1kaWZmJztcbmltcG9ydCB7IENka1Rvb2xraXRQcm9wcyB9IGZyb20gJ2F3cy1jZGsvbGliL2Nkay10b29sa2l0JztcblxuZXhwb3J0IGNvbnN0IGNka0RpZmZDYXRlZ29yaWVzID0gWydpYW1DaGFuZ2VzJywgJ3NlY3VyaXR5R3JvdXAnLCAncmVzb3VyY2VzJywgJ3BhcmFtZXRlcnMnLCAnbWV0YWRhdGEnLCAnbWFwcGluZ3MnLCAnY29uZGl0aW9ucycsICdvdXRwdXRzJywgJ3Vua25vd24nXSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIENka0RpZmZDYXRlZ29yaWVzID0gdHlwZW9mIGNka0RpZmZDYXRlZ29yaWVzO1xuZXhwb3J0IHR5cGUgQ2RrRGlmZkNhdGVnb3J5ID0gQ2RrRGlmZkNhdGVnb3JpZXNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFN0YWNrUmF3RGlmZiA9IHsgXG4gIHN0YWNrTmFtZTogc3RyaW5nOyBcbiAgcmF3RGlmZjogY2ZuRGlmZi5UZW1wbGF0ZURpZmYsIFxuICBsb2dpY2FsVG9QYXRoTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IFxufTtcblxuZXhwb3J0IHR5cGUgTmljZXJEaWZmQ2hhbmdlID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBmcm9tPzogYW55O1xuICB0bzogYW55O1xuICBhY3Rpb246ICdBRERJVElPTicgfCAnVVBEQVRFJyB8ICdSRU1PVkFMJztcbn1cbmV4cG9ydCB0eXBlIE5pY2VyRGlmZiA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2RrRGlmZlJhdzogc3RyaW5nO1xuICBuaWNlckRpZmY/OiB7XG4gICAgY2RrRGlmZkNhdGVnb3J5OiBDZGtEaWZmQ2F0ZWdvcnk7XG4gICAgcmVzb3VyY2VBY3Rpb246ICdBRERJVElPTicgfCAnVVBEQVRFJyB8ICdSRU1PVkFMJztcbiAgICByZXNvdXJjZVR5cGU6IHN0cmluZztcbiAgICByZXNvdXJjZUxhYmVsOiBzdHJpbmc7XG4gICAgY2hhbmdlczogTmljZXJEaWZmQ2hhbmdlW107XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBuaWNlckRpZmZHdWFyZCA9ICh0aGluZzogYW55KTogdGhpbmcgaXMgTmljZXJEaWZmID0+XG4gIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiZcbiAgdHlwZW9mIHRoaW5nLmxhYmVsID09PSAnc3RyaW5nJyAmJlxuICB0eXBlb2YgdGhpbmcuY2RrRGlmZlJhdyA9PT0gJ3N0cmluZycgJiZcbiAgWyd1bmRlZmluZWQnLCAnb2JqZWN0J10uaW5jbHVkZXModHlwZW9mIHRoaW5nLm5pY2VyRGlmZik7XG5cbmV4cG9ydCB0eXBlIE5pY2VyU3RhY2tEaWZmID0ge1xuICBkaWZmPzogTmljZXJEaWZmW107XG4gIHJhdzogc3RyaW5nO1xuICBzdGFja05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IG5pY2VyU3RhY2tEaWZmR3VhcmQgPSAodGhpbmc6IGFueSk6IHRoaW5nIGlzIE5pY2VyU3RhY2tEaWZmID0+IHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAodHlwZW9mIHRoaW5nLnJhdyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHRoaW5nLnN0YWNrTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghIXRoaW5nLmRpZmYpIHtcbiAgICAgICAgaWYgKHRoaW5nLmRpZmYuZmlsdGVyKG5pY2VyRGlmZkd1YXJkKS5sZW5ndGggPT09IHRoaW5nLmRpZmYubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgY29uc3QgbmljZXJTdGFja0RpZmZWYWxpZGF0b3IgPSAodGhpbmc6IGFueSk6IE5pY2VyU3RhY2tEaWZmW10gPT4ge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh0aGluZy5maWx0ZXIobmljZXJTdGFja0RpZmZHdWFyZCkubGVuZ3RoID09PSB0aGluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGluZztcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYGlucHV0IGlzIG5vdCBhIE5pY2VyU3RhY2tEaWZmW106ICR7SlNPTi5zdHJpbmdpZnkodGhpbmcsIG51bGwsIDIpfWApO1xufVxuXG5leHBvcnQgY29uc3QgZ3VhcmRSZXNvdXJjZURpZmYgPSAodGhpbmc6IGFueSk6IHRoaW5nIGlzIGNmbkRpZmYuUmVzb3VyY2VEaWZmZXJlbmNlID0+XG4gIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiZcbiAgdHlwZW9mIHRoaW5nLmZvckVhY2hEaWZmZXJlbmNlID09PSAnZnVuY3Rpb24nO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmVmFsaWRhdG9yID0gKHRoaW5nOiBhbnkpOiB7IGRpZmZDb2xsZWN0aW9uS2V5OiBDZGtEaWZmQ2F0ZWdvcnk7IGRpZmZDb2xsZWN0aW9uOiBjZm5EaWZmLkRpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgY2ZuRGlmZi5EaWZmZXJlbmNlPGFueT4+IH0gPT4ge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jykge1xuICAgIGlmICh0aGluZy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IFtkaWZmQ29sbGVjdGlvbktleSwgZGlmZkNvbGxlY3Rpb25dID0gdGhpbmc7XG4gICAgICBpZiAoIWNka0RpZmZDYXRlZ29yaWVzLmluY2x1ZGVzKGRpZmZDb2xsZWN0aW9uS2V5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVuZXhwZWN0ZWQgZGlmZiBjYXRlZ29yeTogJHtkaWZmQ29sbGVjdGlvbktleX1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkaWZmQ29sbGVjdGlvbiA9PT0gJ29iamVjdCcgJiYgZGlmZkNvbGxlY3Rpb24uaGFzT3duUHJvcGVydHkoJ2RpZmZzJykpIHtcbiAgICAgICAgcmV0dXJuIHsgZGlmZkNvbGxlY3Rpb25LZXksIGRpZmZDb2xsZWN0aW9uIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGRpZmY6ICR7SlNPTi5zdHJpbmdpZnkodGhpbmcsIG51bGwsIDIpfWApO1xufVxuXG5leHBvcnQgdHlwZSBDZGtUb29sa2l0RGVwbG95bWVudHNQcm9wID0gJ2Nsb3VkRm9ybWF0aW9uJyB8ICdkZXBsb3ltZW50cyc7XG5cbmV4cG9ydCB0eXBlIEN1c3RvbUNka1Rvb2xraXRFeHRyYVByb3BzID0ge1xuICBjZGtUb29sa2l0RGVwbG95bWVudHNQcm9wOiBDZGtUb29sa2l0RGVwbG95bWVudHNQcm9wO1xufVxuXG5leHBvcnQgdHlwZSBDdXN0b21DZGtUb29sa2l0UHJvcHMgPSBDZGtUb29sa2l0UHJvcHMgJiBDdXN0b21DZGtUb29sa2l0RXh0cmFQcm9wcyJdfQ==